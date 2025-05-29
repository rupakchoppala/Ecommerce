import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
declare global {
  interface Window {
    Razorpay: any;
  }
}
export default function ShippingCheckout() {
  const location = useLocation();
  const { selectedSize } = location.state || {};
   
  useEffect(() => {
    if (!selectedSize) {
      toast.error("No size selected, please select size from product page.");
    }
  }, [selectedSize]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    aptNumber: "",
    state: "",
    zip: "",
  });

  // Order summary state with quantity
  const [orderSummary, setOrderSummary] = useState({
    items: [
      { id: 1, name: "Silhouette No. 1 – Vermilion", price: 7999, quantity: 1 },
    ],
    shipping: 200,
    size:selectedSize,
    taxRate: 0.212, // 21.2%
  });

  // Calculate totals dynamically
  const calculateTotals = () => {
    const beforeTax = orderSummary.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = Math.round(beforeTax * orderSummary.taxRate);
    const total = beforeTax + tax + orderSummary.shipping;
    return { beforeTax, tax, total };
  };

  const { beforeTax, tax, total } = calculateTotals();

  const ENDPOINT = "https://ecommerce-1-dxvk.onrender.com/api/address";

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then((res) => {
        const data = res.data;
        setFormData({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          street: data.street || "",
          aptNumber: data.aptNumber || "",
          state: data.state || "",
          zip: data.zip || "",
        });
      })
      .catch((err: any) => {
        console.error("Error fetching address:", err);
      });
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .put(ENDPOINT, formData)
      .then((_res) => {
        toast.success("Address saved successfully!");
      })
      .catch((err) => {
        console.error("Error saving address:", err);
      });
  };

  // Handler to update quantity for items
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setOrderSummary((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity < 1 ? 1 : newQuantity }
          : item
      ),
    }));
  };

  // Format currency (optional enhancement)
  const formatCurrency = (value: number) =>
    value.toLocaleString("en-IN", { style: "currency", currency: "INR" });
    
    const placeOrder = async () => {
      try {
        const amount = total * 100; // in paisa
    
        // Step 1: Create order
        const orderRes = await fetch("https://ecommerce-1-dxvk.onrender.com/api/payment/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount }),
        });
        const orderData = await orderRes.json();
    
        // Step 2: Razorpay Options
        const options = {
          key: "rzp_test_NYVES9dBF6XouV",
          amount: orderData.amount,
          currency: "INR",
          name: "Your Store",
          description: "Order Payment",
          order_id: orderData.id,
          handler: async function (response: any) {
            // Step 3: Verify payment
            const verifyRes = await fetch("https://ecommerce-1-dxvk.onrender.com/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const verifyData = await verifyRes.json();
    
            if (verifyData.success) {
              // Step 4: Save order to DB
              const orderDetails = {
                shippingAddress: formData,
                items: orderSummary.items,
                shipping: orderSummary.shipping,
                tax: tax,
                total: total,
                paymentId: response.razorpay_payment_id,
              };
    
              await axios.post("https://ecommerce-1-dxvk.onrender.com/api/orders", orderDetails);
              toast.success("Order placed successfully!");
            } else {
              toast.error("Payment verification failed.");
            }
          },
          prefill: {
            name: formData.firstName + " " + formData.lastName,
            email: "customer@example.com", // Optional
            contact: "9999999999",         // Optional
          },
          theme: { color: "#000" },
        };
    
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (err) {
        console.error("Error during payment:", err);
        toast.error("Something went wrong.");
      }
    };
    
    
  return (
    <>
      <div
        className="flex items-center gap-2 pl-14 mt-12 text-[22px]"
        style={{ fontFamily: "Helvetica Neue, sans-serif" }}
      >
        <ChevronLeft className="text-center" />
        Shopping Address
      </div>

      <div
        className="flex flex-col md:flex-row min-h-screen text-white p-4 md:p-10 gap-6"
        style={{ fontFamily: "Helvetica Neue, sans-serif" }}
      >
        {/* Shipping Address */}
        <div className="w-full md:w-[731px] bg-white text-black rounded-[9px] md:p-9 p-6 shadow-lg border-[3px] border-gray-200">
          <h2 className="text-[20px] mb-8 flex items-center gap-2">
            <div className="h-6 w-6 border-1 border-red-600 rounded-full flex items-center justify-center">
              <span className="h-2.5 w-2.5 bg-red-600 rounded-full inline-block"></span>
            </div>
            Add New Address
          </h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col mb-4">
              <label className="text-sm mb-1">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                className="border-2 border-gray-200 p-2 rounded"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-sm mb-1">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className="border-2 border-gray-200 p-2 rounded"
              />
            </div>

            <div className="flex flex-col col-span-2 mb-4">
              <label className="text-sm mb-1">Street Address</label>
              <input
                name="street"
                value={formData.street}
                onChange={handleChange}
                type="text"
                placeholder="Street Address"
                className="border-2 border-gray-200 p-2 rounded"
              />
            </div>

            <div className="flex flex-row md:flex-row md:items-end gap-3 md:gap-4 col-span-2">
              <div className="flex flex-col mb-4">
                <label className="text-sm mb-1">Apt Number</label>
                <input
                  name="aptNumber"
                  value={formData.aptNumber}
                  onChange={handleChange}
                  type="text"
                  placeholder="Apt Number"
                  className="border-2 border-gray-200 p-2 rounded w-[110px] md:w-[185px]"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-sm mb-1">State</label>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  type="text"
                  placeholder="State"
                  className="border-2 border-gray-200 p-2 rounded w-[110px] md:w-[185px]"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-sm mb-1">Zip</label>
                <input
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  type="text"
                  placeholder="Zip"
                  className="border-2 border-gray-200 p-2 rounded w-[110px] md:w-[185px]"
                />
              </div>
            </div>

            <div className="col-span-2 flex md:flex-row flex-col-reverse justify-between mt-4 gap-2 md:gap-0">
              <button
                type="button"
                className="border-2 border-gray-200 md:w-[190px] w-[350px] text-black px-6 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 md:w-[360px] w-[350px] rounded"
              >
                Save This Address
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-[572px] bg-gray-200 text-black rounded-[9px] p-9 shadow-lg">
          <p className="text-[16px] text-gray-600 mb-4">
            By placing your order, you agree to our company{" "}
            <span className="underline cursor-pointer">Privacy policy</span> and{" "}
            <span className="underline cursor-pointer">Conditions of use</span>.
          </p>
          <hr className="h-2 text-gray-300 mt-6" />
          <h2 className="text-[20px] mb-2 mt-4">Order Summary</h2>

          <div className="text-sm space-y-1 mt-8">
            {orderSummary.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mt-2"
              >
                <div className="flex flex-col">
                  <span>Items - {item.name}</span>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                    className="border border-gray-400 rounded w-20 mt-1 p-1"
                  />
                </div>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </div>
            ))}
            <div className="flex justify-between mt-2">
              <span>Selected size:</span>
              <span>{orderSummary.size}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Shipping and handling:</span>
              <span>{formatCurrency(orderSummary.shipping)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Before tax:</span>
              <span>{formatCurrency(beforeTax)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Tax Collected:</span>
              <span>{formatCurrency(tax)}</span>
            </div>
          </div>

          <hr className="my-8 text-gray-300" />

          <div className="flex justify-between text-lg mt-3 font-semibold">
            <span>Order Total:</span>
            <span>{formatCurrency(total)}</span>
          </div>

          <button className="w-full bg-black text-white mt-10 py-2 rounded"
          onClick={placeOrder}>
            Pay & Place Order
          </button>
        </div>
      </div>
    </>
  );
}
