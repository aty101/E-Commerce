import FooterSection from "./FooterSection";

const services: string[] = [
  "Bonus program",
  "Gift cards",
  "Credit and payment",
  "Service contracts",
  "Non-cash account",
  "Payment",
];

const assistance: string[] = [
  "Find an order",
  "Terms of delivery",
  "Exchange and return of goods",
  "Guarantee",
  "Frequently asked questions",
  "Terms of use of the site",
];

export default function Footer() {
  return (
    <>
      <footer className="py-10 px-3 flex flex-col items-center justify-center gap-5 bg-[#181313] text-white">
        <FooterSection
          title="cyber"
          body={`We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than`}
        />
        <FooterSection title="Services" body={services} />
        <FooterSection title="Assistance to the buyer" body={assistance} />
      </footer>
    </>
  );
}
