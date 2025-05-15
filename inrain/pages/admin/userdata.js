import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { useEffect, useState } from "react";
import withAuth from "@/components/withauth";
function UserData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/hello");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    setTimeout(() => {
      localStorage.removeItem("token");
    }, 3000);

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="text-center flex justify-center">
        <table className=" w-full">
          <caption className="text-2xl text-center m-10">User Data</caption>
          <thead>
            <tr>
              <th className="text-xl">Name</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Mobile No.</th>
              <th className="text-xl">Message</th>
            </tr>
          </thead>
          <tbody className="border-separate border-2 border-spacing-3 text-lg">
            {products.map((product) => (
              <tr className="text-center m-2">
                <>
                  <td className="border-2 p-5 border-black">{product.name}</td>
                  <td className="border-2 p-5 border-black">{product.email}</td>
                  <td className="border-2 p-5 border-black">
                    {product.mobile}
                  </td>
                  <td className="border-2 p-5 border-black">
                    {product.message}
                  </td>
                </>
                <hr></hr>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default withAuth(UserData);
