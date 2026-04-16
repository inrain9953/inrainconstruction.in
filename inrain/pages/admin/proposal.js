import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import PopUp from "@/components/popup";
import React from "react";
import { useState, useEffect } from "react";

const Proposal = () => {
  const [clientDetails, setClientDetails] = useState({
    clientName: "",
    organization: "",
    location: "",
    date: "",
  });

  const [pitDetails, setPitDetails] = useState({
    sizeOfPit: {
      length: 0,
      breadth: 0,
      height: 0,
      total: 0,
    },
    excavationRequired: {
      length: 0,
      breadth: 0,
      height: 0,
      total: 0,
    },
  });

  const [wrappingGeotextile, setWrappingGeotextile] = useState({
    length: 0,
    breadth: 0,
    height: 0,
    total: 0,
  });

  const [loading, setLoading] = useState(false);

  const [costOfOneRWH, setCostOfOneRWH] = useState(0);
  const [noOfRWH, setNoOfRWH] = useState(0);
  const [costOfMultipleRWH, setCostOfMultipleRWH] = useState(0);

  const [boqDetails, setBoqDetails] = useState({
    ExcavationOf: {
      first: 0,
      second: 0,
      third: 0,
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    DrillingOfInjection: {
      first: 0,
      second: 0,
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    SupplyOfPVC: {
      first: 0,
      second: 0,
      third: 0,
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    ProvidingAndLaying: {
      first: 0,
      second: 0,
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    SupplyOfStoneChips: {
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    SupplyofRePolymerBased: {
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    SupplyOfNonWoven: {
      first: 0,
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    SupplyOfFRPBased: {
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    SupplyOfRequired: {
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    InstallationOfEntire: {
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
    TransportationAndShifting: {
      Quantity: 0,
      UOM: "",
      UnitPrice: 0,
      total: 0,
    },
  });
  const [gst, setGst] = useState("");
  const [transportation, setTransportation] = useState("");

  useEffect(() => {
    const totalCost = Object.values(boqDetails).reduce(
      (sum, item) => sum + (item.total || 0),
      0,
    );

    setCostOfOneRWH(Number(totalCost.toFixed(2)));
  }, [boqDetails]);

  async function getProposal(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/proposal-doc", {
        method: "POST",
        body: JSON.stringify({
          clientDetails,
          pitDetails,
          wrappingGeotextile,
          boqDetails,
          noOfRWH,
          costOfOneRWH,
          costOfMultipleRWH,
          gst,
          transportation,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.blob();
      const url = URL.createObjectURL(data);
      window.open(url);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setClientDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWrappingChange = (e) => {
    const { name, value } = e.target;

    setWrappingGeotextile((prev) => {
      const updated = {
        ...prev,
        [name]: Number(value),
      };

      const base = (updated.length + updated.breadth + updated.height) * 2;

      const prevTotal = base * 0.25;
      const total = base + prevTotal;

      return {
        ...updated,
        total: Number(total.toFixed(2)), // optional rounding
      };
    });
  };

  const handlePitChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");

    setPitDetails((prev) => {
      const updatedSection = {
        ...prev[section],
        [field]: Number(value),
      };

      // Calculate total (L × B × H)
      const total =
        updatedSection.length * updatedSection.breadth * updatedSection.height;

      return {
        ...prev,
        [section]: {
          ...updatedSection,
          total: Number(total.toFixed(2)) || 0,
        },
      };
    });
  };

  const handleBoqChange = (e) => {
    const { name, value } = e.target;

    // name format: "ExcavationOf.Quantity"
    const [section, field] = name.split(".");

    setBoqDetails((prev) => {
      const updatedSection = {
        ...prev[section],
        [field]: field === "UOM" ? value : Number(value),
      };

      // Calculate total ONLY if Quantity & UnitPrice exist
      const quantity = updatedSection.Quantity || 0;
      const unitPrice = updatedSection.UnitPrice || 0;

      const total = quantity * unitPrice;

      return {
        ...prev,
        [section]: {
          ...updatedSection,
          total: Number(total.toFixed(2)),
        },
      };
    });
  };

  const handleNoOfRWHChange = (e) => {
    setNoOfRWH(Number(e.target.value));
    setCostOfMultipleRWH(Number((costOfOneRWH * e.target.value).toFixed(2)));
  };

  return (
    <>
      <Navbar />
      <PopUp />
      {loading && (
        <div className="spinner-wrapper">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto bg-sky-100 shadow-xl rounded-3xl p-8">
          <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Proposal
          </h1>
          <form className="space-y-10" type="submit" onSubmit={getProposal}>
            <div>
              <h2 className="text-xl text-center font-semibold mb-4 text-gray-700">
                Client Details
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="text"
                  name="clientName"
                  value={clientDetails.clientName}
                  onChange={handleChange}
                  className="border border-black rounded-xl h-9 font-semibold p-2 text-[14px]"
                  label="Client Name"
                  placeholder="Enter client name"
                />
                <input
                  type="text"
                  name="organization"
                  value={clientDetails.organization}
                  onChange={handleChange}
                  className="border border-black rounded-xl h-9 font-semibold p-2 text-[14px]"
                  label="Organization"
                  placeholder="Enter organization"
                />
                <input
                  type="text"
                  name="location"
                  value={clientDetails.location}
                  onChange={handleChange}
                  className="border border-black rounded-xl h-9 font-semibold p-2 text-[14px]"
                  label="Location"
                  placeholder="Enter location"
                />
              </div>

              <div className="mt-6 flex flex-col items-center">
                <h2 className="text-xl text-center font-semibold mb-4 text-gray-700">
                  Date of Proposal
                </h2>
                <input
                  type="date"
                  name="date"
                  value={clientDetails.date}
                  onChange={handleChange}
                  className="border border-black cursor-pointer rounded-xl h-9 font-semibold p-2 text-[14px]"
                  label="Date"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl text-center font-semibold mb-4 text-gray-700">
                Pit Details
              </h2>
              <div className="flex justify-center items-center gap-8">
                <div className="border rounded-xl p-4 bg-gray-50">
                  <h3 className="font-medium text-gray-700" htmlFor="size">
                    Size of Pit:
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-1">
                      (Length × Breadth × Height)
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      name="sizeOfPit.length"
                      value={pitDetails.sizeOfPit.length}
                      onChange={handlePitChange}
                      className="border p-2 rounded-lg"
                      type="number"
                      placeholder="Length"
                    />
                    <input
                      name="sizeOfPit.breadth"
                      value={pitDetails.sizeOfPit.breadth}
                      onChange={handlePitChange}
                      className="border p-2 rounded-lg"
                      type="number"
                      placeholder="Breadth"
                    />
                    <input
                      className="border p-2 rounded-lg"
                      type="number"
                      placeholder="Height"
                      name="sizeOfPit.height"
                      value={pitDetails.sizeOfPit.height}
                      onChange={handlePitChange}
                    />
                  </div>
                  <div className="mt-3 text-right font-semibold text-green-600">
                    {pitDetails.sizeOfPit.total} m³
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50">
                  <h3 className="font-medium text-gray-700" htmlFor="size">
                    Excavation required at site:
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-1">
                      (Length × Breadth × Height)
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      name="excavationRequired.length"
                      value={pitDetails.excavationRequired.length}
                      onChange={handlePitChange}
                      className="border p-2 rounded-lg"
                      type="number"
                      placeholder="Length"
                    />
                    <input
                      name="excavationRequired.breadth"
                      value={pitDetails.excavationRequired.breadth}
                      onChange={handlePitChange}
                      className="border p-2 rounded-lg"
                      type="number"
                      placeholder="Breadth"
                    />
                    <input
                      name="excavationRequired.height"
                      value={pitDetails.excavationRequired.height}
                      onChange={handlePitChange}
                      className="border p-2 rounded-lg"
                      type="number"
                      placeholder="Height"
                    />
                  </div>
                  <div className="mt-3 text-right font-semibold text-green-600">
                    {pitDetails.excavationRequired.total} m³
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50">
                  <h3 className="font-medium text-gray-700" htmlFor="size">
                    Wrapping of Geotextile:
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-1">
                      (Length × Breadth × Height)
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      name="length"
                      value={wrappingGeotextile.length}
                      onChange={handleWrappingChange}
                      className="border p-2 rounded-lg"
                      type="number"
                      placeholder="Length"
                    />
                    <input
                      name="breadth"
                      value={wrappingGeotextile.breadth}
                      onChange={handleWrappingChange}
                      className="border p-2 rounded-lg"
                      type="number"
                      placeholder="Breadth"
                    />
                    <input
                      name="height"
                      value={wrappingGeotextile.height}
                      onChange={handleWrappingChange}
                      className="border p-2 rounded-lg"
                      type="number"
                      placeholder="Height"
                    />
                  </div>
                  <div className="mt-3 text-right font-semibold text-green-600">
                    {wrappingGeotextile.total} m³
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-xl text-center font-semibold mb-4 text-gray-700">
                BOQ Details
              </h2>
              <div className="space-y-4">
                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Excavation of{" "}
                    <input
                      type="number"
                      name="ExcavationOf.first"
                      value={boqDetails.ExcavationOf.first}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    m long and{" "}
                    <input
                      type="number"
                      name="ExcavationOf.second"
                      value={boqDetails.ExcavationOf.second}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    M wide tank for lifts ranging from{" "}
                    <input
                      type="number"
                      name="ExcavationOf.third"
                      value={boqDetails.ExcavationOf.third}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    Meter below the ground to NGL by excavator. Complete in all
                    respect.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="ExcavationOf.Quantity"
                      value={boqDetails.ExcavationOf.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="ExcavationOf.UOM"
                      value={boqDetails.ExcavationOf.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="ExcavationOf.UnitPrice"
                      value={boqDetails.ExcavationOf.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.ExcavationOf.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Drilling of Injection well for rain water recharge purpose
                    of
                    <input
                      type="number"
                      name="DrillingOfInjection.first"
                      value={boqDetails.DrillingOfInjection.first}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    " dia (tentative depth meters{" "}
                    <input
                      type="number"
                      name="DrillingOfInjection.second"
                      value={boqDetails.DrillingOfInjection.second}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    m bore) with Reverse Rotary Machine, (INCASE OF ROCKY STRATA
                    RATES WILL BE REVISED AS PER ACTUAL) complete in all
                    respect.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="DrillingOfInjection.Quantity"
                      value={boqDetails.DrillingOfInjection.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="DrillingOfInjection.UOM"
                      value={boqDetails.DrillingOfInjection.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="DrillingOfInjection.UnitPrice"
                      value={boqDetails.DrillingOfInjection.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.DrillingOfInjection.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Supply of PVC pipe (
                    <input
                      type="number"
                      name="SupplyOfPVC.first"
                      value={boqDetails.SupplyOfPVC.first}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    mm Dia) having{" "}
                    <input
                      type="number"
                      name="SupplyOfPVC.second"
                      value={boqDetails.SupplyOfPVC.second}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    kg/cm2 pressure of ISI approved make, including supply of
                    socket and solvents (Tentative depth{" "}
                    <input
                      type="number"
                      name="SupplyOfPVC.third"
                      value={boqDetails.SupplyOfPVC.third}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    Mtrs * each bore), complete in all respect. * (Pro rata)
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="SupplyOfPVC.Quantity"
                      value={boqDetails.SupplyOfPVC.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="SupplyOfPVC.UOM"
                      value={boqDetails.SupplyOfPVC.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="SupplyOfPVC.UnitPrice"
                      value={boqDetails.SupplyOfPVC.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.SupplyOfPVC.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Providing and laying of Pea gravel of{" "}
                    <input
                      type="number"
                      name="ProvidingAndLaying.first"
                      value={boqDetails.ProvidingAndLaying.first}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />{" "}
                    to{" "}
                    <input
                      type="number"
                      name="ProvidingAndLaying.second"
                      value={boqDetails.ProvidingAndLaying.second}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    mm, including filling of gravel in annular space with pea
                    gravel, complete in all respect.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="ProvidingAndLaying.Quantity"
                      value={boqDetails.ProvidingAndLaying.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="ProvidingAndLaying.UOM"
                      value={boqDetails.ProvidingAndLaying.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="ProvidingAndLaying.UnitPrice"
                      value={boqDetails.ProvidingAndLaying.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.ProvidingAndLaying.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Supply of stone chips and River sand etc. complete in all
                    respect.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="SupplyOfStoneChips.Quantity"
                      value={boqDetails.SupplyOfStoneChips.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="SupplyOfStoneChips.UOM"
                      value={boqDetails.SupplyOfStoneChips.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="SupplyOfStoneChips.UnitPrice"
                      value={boqDetails.SupplyOfStoneChips.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.SupplyOfStoneChips.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Supply of Re-Polymer based modules of make (InRain™)
                    (Honeycomb Structure) made up of recycled polypropylene
                    capable of taking vehicular movement up to 45tonnes with
                    adequate backfilling 4 Large plates & 4 small plates
                    combination creating 4 spans inside the module. These
                    modules are made from combination of large (685*410mm) and
                    small (370*411mm) plates along with external locks. Each
                    large plate should have minimum fourteen external locking
                    slots in order to give stability to tank. These tank should
                    have optimum connection & block stability using double lock
                    stability. Each single tank is made of four large and four
                    small plates in case of single tank and 13 large & 16 small
                    plates for quadruple tank. Capacity of single tank is
                    (.685*.410*.450 mtr) equals to 0.126 CUM(gross). Weight of
                    each large plate should be minimum 1.3 Kg and each small
                    plate should be at least .650 Kg. Manufacturing company
                    certified by GRIHA, IGBC, CGWB, NABL and ISO 9001, 14001 IAF
                    parameter.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="SupplyofRePolymerBased.Quantity"
                      value={boqDetails.SupplyofRePolymerBased.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="SupplyofRePolymerBased.UOM"
                      value={boqDetails.SupplyofRePolymerBased.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="SupplyofRePolymerBased.UnitPrice"
                      value={boqDetails.SupplyofRePolymerBased.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.SupplyofRePolymerBased.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Supply of non-woven geotextile having thickness of{" "}
                    <input
                      type="number"
                      name="SupplyOfNonWoven.first"
                      value={boqDetails.SupplyOfNonWoven.first}
                      onChange={handleBoqChange}
                      className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                    />
                    GSM, having minimum tear strength of 250 ASTM D4533, Width
                    wise minimum 215 ASTM D4533 having puncture strength of 1550
                    plus asper ASTM D6241 Having elongation at Break of 57% plus
                    as per ASTM D 4595 in double layers, made out of long fibres
                    to hold the modules including cutting, sizing, Heat welding
                    and needle punched for high porosity and proper percolation.
                    complete as per entire satisfaction of engineer-in-charge.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="SupplyOfNonWoven.Quantity"
                      value={boqDetails.SupplyOfNonWoven.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="SupplyOfNonWoven.UOM"
                      value={boqDetails.SupplyOfNonWoven.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="SupplyOfNonWoven.UnitPrice"
                      value={boqDetails.SupplyOfNonWoven.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.SupplyOfNonWoven.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Supply of FRP based InRain™ filtration device with diameter
                    of 780 mm and height 1000 mm having inlet of 200mm and
                    outlet of 200mm. capable of filtration in two stage, upper
                    layer has SS304 mesh which can filter out solid suspended
                    particle up to 600 microns & lower membranes is capable of
                    filtering up to 90 microns. Flow rate of filtration device
                    is up to 80 KL / hr. (FRP based RWH Filter). Approved from
                    GRIHA complete (GRIHA V.3 criterion: 21GRIHA V.2015
                    criterion: 18 & SVAGRIHA criterion: 9) as per entire
                    satisfaction of engineer-in-charge. Patented design of
                    InRain®. Manufacturing company certified by GRIHA, IGBC,
                    CGWB, NABL and ISO 9001, 14001 IAF parameter.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="SupplyOfFRPBased.Quantity"
                      value={boqDetails.SupplyOfFRPBased.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="SupplyOfFRPBased.UOM"
                      value={boqDetails.SupplyOfFRPBased.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="SupplyOfFRPBased.UnitPrice"
                      value={boqDetails.SupplyOfFRPBased.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.SupplyOfFRPBased.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Supply of required 200 mm dia having 6 KG per centimetre
                    square Pressure i.e. excavation, refilling, cutting &
                    jointing for providing proper loop from/to existing storm
                    water drain complete as per entire satisfaction of Engineer
                    in charge. additional pipe will be charged extra.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="SupplyOfRequired.Quantity"
                      value={boqDetails.SupplyOfRequired.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="SupplyOfRequired.UOM"
                      value={boqDetails.SupplyOfRequired.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="SupplyOfRequired.UnitPrice"
                      value={boqDetails.SupplyOfRequired.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.SupplyOfRequired.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Installation of entire structure including wielding of
                    Geotextile and DE-boarding of Tank Connection Filter from
                    Manhole to filter and filter to RWHP, dressing of Base along
                    cutting and sizing of busses and tree roots, Assembling of
                    InRain Modules. complete in all respect.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="InstallationOfEntire.Quantity"
                      value={boqDetails.InstallationOfEntire.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="InstallationOfEntire.UOM"
                      value={boqDetails.InstallationOfEntire.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="InstallationOfEntire.UnitPrice"
                      value={boqDetails.InstallationOfEntire.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.InstallationOfEntire.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Transportation and shifting charges of equipment.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <p>Quantity</p>
                    <p>UOM</p>
                    <p>Unit Price</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="number"
                      name="TransportationAndShifting.Quantity"
                      value={boqDetails.TransportationAndShifting.Quantity}
                      onChange={handleBoqChange}
                      placeholder="Quantity"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="text"
                      name="TransportationAndShifting.UOM"
                      value={boqDetails.TransportationAndShifting.UOM}
                      onChange={handleBoqChange}
                      placeholder="UOM"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <input
                      type="number"
                      name="TransportationAndShifting.UnitPrice"
                      value={boqDetails.TransportationAndShifting.UnitPrice}
                      onChange={handleBoqChange}
                      placeholder="Unit Price"
                      className="border border-black rounded-md pl-2 font-semibold bg-green-200"
                    />
                    <div className="flex items-center justify-center font-semibold text-green-600">
                      Value: ₹ {boqDetails.TransportationAndShifting.total}
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-700">
                      Cost Of 01 RWHP
                    </p>
                    <p className="flex items-center justify-center font-semibold text-green-600">
                      Total Value: ₹ {costOfOneRWH}
                    </p>
                  </div>
                </div>

                <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-700 mb-3">
                      Cost Of{" "}
                      <input
                        type="number"
                        name="noOfRWH"
                        value={noOfRWH}
                        onChange={handleNoOfRWHChange}
                        className="w-20 border font-semibold text-red-600 bg-yellow-100 rounded-md border-black"
                      />{" "}
                      RWHP
                    </p>
                    <p className="flex items-center justify-center font-semibold text-green-600">
                      Total Value: ₹ {costOfMultipleRWH}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p>
                1. GST @18% is{" "}
                <input
                  type="text"
                  name="gst"
                  value={gst}
                  onChange={(e) => setGst(e.target.value)}
                  className="w-40 border border-black rounded-md pl-2 font-semibold bg-green-200"
                />{" "}
                in the BOQ Above.{" "}
              </p>
              <p>
                2. Transportation is{" "}
                <input
                  type="text"
                  name="transportation"
                  value={transportation}
                  onChange={(e) => setTransportation(e.target.value)}
                  className="w-40 border border-black rounded-md pl-2 font-semibold bg-green-200"
                />{" "}
                in the above BOQ.{" "}
              </p>
            </div>

            <div className="text-center pt-6">
              <button
                className="bg-blue-600 text-white px-10 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
                type="submit"
              >
                Proposal
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Proposal;
