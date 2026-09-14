import './table.scss'



const rows = [
    {
        trackingId: "TRK1001",
        product: "Laptop",
        customer: "Rahul Sharma",
        date: "2026-09-10",
        amount: 55000,
        paymentMethod: "UPI",
        status: "Completed"
    },
    {
        trackingId: "TRK1002",
        product: "Smartphone",
        customer: "Amit Verma",
        date: "2026-09-11",
        amount: 24999,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        trackingId: "TRK1003",
        product: "Wireless Headphones",
        customer: "Priya Singh",
        date: "2026-09-11",
        amount: 3499,
        paymentMethod: "Cash",
        status: "Pending"
    },
    {
        trackingId: "TRK1004",
        product: "Keyboard",
        customer: "Vikas Yadav",
        date: "2026-09-12",
        amount: 1299,
        paymentMethod: "UPI",
        status: "Completed"
    },
    {
        trackingId: "TRK1005",
        product: "Monitor",
        customer: "Neha Gupta",
        date: "2026-09-12",
        amount: 18500,
        paymentMethod: "Debit Card",
        status: "Processing"
    },
    {
        trackingId: "TRK1006",
        product: "Printer",
        customer: "Ankit Mishra",
        date: "2026-09-13",
        amount: 12500,
        paymentMethod: "Bank Transfer",
        status: "Completed"
    },
    {
        trackingId: "TRK1007",
        product: "Mouse",
        customer: "Pooja Singh",
        date: "2026-09-13",
        amount: 899,
        paymentMethod: "UPI",
        status: "Cancelled"
    },
    {
        trackingId: "TRK1008",
        product: "Tablet",
        customer: "Sanjay Kumar",
        date: "2026-09-14",
        amount: 32000,
        paymentMethod: "Credit Card",
        status: "Completed"
    },
    {
        trackingId: "TRK1009",
        product: "Webcam",
        customer: "Ravi Tiwari",
        date: "2026-09-14",
        amount: 4599,
        paymentMethod: "UPI",
        status: "Pending"
    },
    {
        trackingId: "TRK1010",
        product: "External SSD",
        customer: "Sneha Patel",
        date: "2026-09-14",
        amount: 7999,
        paymentMethod: "Debit Card",
        status: "Completed"
    }
];




const Table = () => {

    return (

        <div className="table">
            <table>
                        <tr>
                            <td>Tracking Id</td>
                            <td>Product</td>
                            <td>Customer</td>
                            <td>Date</td>
                            <td>Amount</td>
                            <td>Payment Method</td>
                            <td>Status</td>
                        </tr>
                {rows.map((data) => (

                        <tr key={data.trackingId}>
                            <td>{data.trackingId}</td>
                            <td>{data.product}</td>
                            <td>{data.customer}</td>
                            <td>{data.date}</td>
                            <td>{data.amount}</td>
                            <td>{data.paymentMethod}</td>
                            <td>{data.status}</td>
                        </tr>

                    )
                )}
            </table>
        </div>
    )
}

export default Table