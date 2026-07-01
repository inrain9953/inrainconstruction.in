import fs from "fs";
import path from "path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

export default function handler(req, res) {
  const {
    clientDetails,
    pitDetails,
    wrappingGeotextile,
    boqDetails,
    noOfRWH,
    costOfOneRWH,
    costOfMultipleRWH,
    gst,
    transportation,
  } = JSON.parse(req.body);

  //Date Formatting
  const date = clientDetails.date;
  const d = new Date(date);
  const day = d.getDate();
  const year = d.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formatted = `${day} ${months[d.getMonth()]} ${year}`;

  const numberToWords = (num) => {
    const ones = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];

    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    const getWords = (n) => {
      if (n < 20) return ones[n];
      if (n < 100)
        return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
      if (n < 1000)
        return (
          ones[Math.floor(n / 100)] +
          " Hundred" +
          (n % 100 ? " " + getWords(n % 100) : "")
        );
      return "";
    };

    if (num === 0) return "Zero";

    let result = "";

    const crore = Math.floor(num / 10000000);
    num %= 10000000;

    const lakh = Math.floor(num / 100000);
    num %= 100000;

    const thousand = Math.floor(num / 1000);
    num %= 1000;

    const hundred = num;

    if (crore) result += getWords(crore) + " Crore ";
    if (lakh) result += getWords(lakh) + " Lakh ";
    if (thousand) result += getWords(thousand) + " Thousand ";
    if (hundred) result += getWords(hundred);

    return result.trim();
  };
  const words = numberToWords(costOfMultipleRWH) + " Rupees Only";

  const OneRWHAmount = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(costOfOneRWH);

  const MultipleRWHAmount = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(costOfMultipleRWH);

  try {
    const filePath = path.resolve("./public/Proposal.docx");
    const content = fs.readFileSync(filePath, "binary");

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip);
    // console.log("Document loaded successfully");
    // console.log("This is the content", doc.getFullText());

    // Replace placeholders
    doc.setData({
      clientName: clientDetails.clientName,
      organization: clientDetails.organization,
      location: clientDetails.location,
      date: formatted,
      // PitDetails
      SOPL: pitDetails.sizeOfPit.length,
      SOPB: pitDetails.sizeOfPit.breadth,
      SOPH: pitDetails.sizeOfPit.height,
      SOPT: pitDetails.sizeOfPit.total,
      ERL: pitDetails.excavationRequired.length,
      ERB: pitDetails.excavationRequired.breadth,
      ERH: pitDetails.excavationRequired.height,
      ERT: pitDetails.excavationRequired.total,
      //   //   WrappingOfGeotextile
      WGL: wrappingGeotextile.length,
      WGB: wrappingGeotextile.breadth,
      WGH: wrappingGeotextile.height,
      WGT: wrappingGeotextile.total,
      //   //Boq Detials
      EO1: boqDetails.ExcavationOf.first,
      EO2: boqDetails.ExcavationOf.second,
      EO3: boqDetails.ExcavationOf.third,
      EOQ: boqDetails.ExcavationOf.Quantity,
      EOUOM: boqDetails.ExcavationOf.UOM,
      EOUP: boqDetails.ExcavationOf.UnitPrice,
      EOT: boqDetails.ExcavationOf.total,
      //   // ---------------------------------
      DOI1: boqDetails.DrillingOfInjection.first,
      DOI2: boqDetails.DrillingOfInjection.second,
      DOIQ: boqDetails.DrillingOfInjection.Quantity,
      DOIUOM: boqDetails.DrillingOfInjection.UOM,
      DOIUP: boqDetails.DrillingOfInjection.UnitPrice,
      DOIT: boqDetails.DrillingOfInjection.total,
      //   // ---------------------------------
      SOPVC1: boqDetails.SupplyOfPVC.first,
      SOPVC2: boqDetails.SupplyOfPVC.second,
      SOPVC3: boqDetails.SupplyOfPVC.third,
      SOPVCQ: boqDetails.SupplyOfPVC.Quantity,
      SOPVCUOM: boqDetails.SupplyOfPVC.UOM,
      SOPVCUP: boqDetails.SupplyOfPVC.UnitPrice,
      SOPVCT: boqDetails.SupplyOfPVC.total,
      //   // ---------------------------------
      PAL1: boqDetails.ProvidingAndLaying.first,
      PAL2: boqDetails.ProvidingAndLaying.second,
      PALQ: boqDetails.ProvidingAndLaying.Quantity,
      PALUOM: boqDetails.ProvidingAndLaying.UOM,
      PALUP: boqDetails.ProvidingAndLaying.UnitPrice,
      PALT: boqDetails.ProvidingAndLaying.total,
      //   // ---------------------------------
      SOSCQ: boqDetails.SupplyOfStoneChips.Quantity,
      SOSCUOM: boqDetails.SupplyOfStoneChips.UOM,
      SOSCUP: boqDetails.SupplyOfStoneChips.UnitPrice,
      SOSCT: boqDetails.SupplyOfStoneChips.total,
      //   // ---------------------------------
      SORPBQ: boqDetails.SupplyofRePolymerBased.Quantity,
      SORPBUOM: boqDetails.SupplyofRePolymerBased.UOM,
      SORPBUP: boqDetails.SupplyofRePolymerBased.UnitPrice,
      SORPBT: boqDetails.SupplyofRePolymerBased.total,
      //   // ---------------------------------
      SONW1: boqDetails.SupplyOfNonWoven.first,
      SONWQ: boqDetails.SupplyOfNonWoven.Quantity,
      SONWUOM: boqDetails.SupplyOfNonWoven.UOM,
      SONWUP: boqDetails.SupplyOfNonWoven.UnitPrice,
      SONWT: boqDetails.SupplyOfNonWoven.total,
      //   // ---------------------------------
      SOFRPQ: boqDetails.SupplyOfFRPBased.Quantity,
      SOFRPUOM: boqDetails.SupplyOfFRPBased.UOM,
      SOFRPUP: boqDetails.SupplyOfFRPBased.UnitPrice,
      SOFRPT: boqDetails.SupplyOfFRPBased.total,
      //   // ---------------------------------
      SORQ: boqDetails.SupplyOfRequired.Quantity,
      SORUOM: boqDetails.SupplyOfRequired.UOM,
      SORUP: boqDetails.SupplyOfRequired.UnitPrice,
      SORT: boqDetails.SupplyOfRequired.total,
      //   // ---------------------------------
      IOEQ: boqDetails.InstallationOfEntire.Quantity,
      IOEUOM: boqDetails.InstallationOfEntire.UOM,
      IOEUP: boqDetails.InstallationOfEntire.UnitPrice,
      IOET: boqDetails.InstallationOfEntire.total,
      //   // ---------------------------------
      TASQ: boqDetails.TransportationAndShifting.Quantity,
      TASUOM: boqDetails.TransportationAndShifting.UOM,
      TASUP: boqDetails.TransportationAndShifting.UnitPrice,
      TAST: boqDetails.TransportationAndShifting.total,
      //   // One RWH Cost
      OneRWH: OneRWHAmount,
      NORWH: noOfRWH,
      MultipleRWH: MultipleRWHAmount,
      GST: gst,
      Transportation: transportation,
      words: words,
    });

    doc.render();

    const buffer = doc.getZip().generate({
      type: "nodebuffer",
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Updated_Proposal.docx",
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    );

    res.send(buffer);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating document");
  }
}
