export default function FooterSection({
  title,
  body,
}: {
  title: string;
  body: string | string[];
}) {
  const bodyType: boolean = typeof body === "string";
  const isArray = Array.isArray(body);
  return (
    <section className="flex gap-3 justify-center items-center flex-col">
      {bodyType ? (
        <h2 className="text-2xl font-bold">{title}</h2>
      ) : (
        <h3 className=" ">{title}</h3>
      )}
      {bodyType ? (
        <p className="text-center opacity-50 ">{body}</p>
      ) : isArray ? (
        body.map((item, index) => (
          <button className="opacity-50 text-center" key={index}>
            {item}
          </button>
        ))
      ) : (
        <></>
      )}
    </section>
  );
}
