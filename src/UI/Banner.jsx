import Button from "../UI/Button";
export default function Banner({
  isHead,
  isTail,
  style,
  specialTitle,
  title,
  description,
  imageLink,
  imageAlt,
}) {
  return (
    <div className={`w-full ${isHead ? "min-h-96" : "min-h-60"}  ${style}`}>
      <div className="pt-20 flex flex-col gap-6 max-w-lg mx-auto">
        {specialTitle ? (
          <h3 className="opacity-50 text-2xl text-center">{specialTitle}</h3>
        ) : (
          <></>
        )}

        {isHead ? (
          <></>
        ) : (
          <img src={imageLink} alt={imageAlt} className="max-w-[75%] mx-auto" />
        )}
        <h2 className={`${isHead? "text-6xl" : "text-4xl"} text-center`}>{title}</h2>
        <p className={`opacity-50 text-center ${isHead? "text-2xl" : "text-lg"}`}>{description}</p>
        <div className="text-center">
          {isHead || isTail ? (
            <Button
              style={`${
                style.includes("text-white")
                  ? "text-white border-white"
                  : "text-black border-black"
              } px-15 mx-auto`}
            >
              Shop Now
            </Button>
          ) : (
            <></>
          )}
        </div>
        {isHead ? (
          <img src={imageLink} alt={imageAlt} className="max-w-[75%] mx-auto" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
