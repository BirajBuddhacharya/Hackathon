function orderCard({
  orderID,
  orderDetails,
  customerName,
  paymentMethod,
  orderTime,
  orderStatus,
  foods,
  total,
}) {
  return (
    <div className="h-96 bg-card w-full">
      <div className="text-xl">{orderID}</div>
      <div>
        <div className="font-bold text-lg">{orderDetails}</div>
        <div></div>
      </div>
    </div>
  );
}
export default function Orders() {
  return (
    <>
      <div className="h-screen w-screen p-20 pt-40 bg-neutral flex">
        <div className="flex justify-center items-center">
          <aside className="flex flex-col justify-center items-center text-white bg-card gap-4 px-15 py-7 rounded-lg">
            <span>pending</span>
            <span>inprogress</span>
            <span>ready</span>
            <span>completed</span>
          </aside>
        </div>

        <div className=""></div>
      </div>
    </>
  );
}
