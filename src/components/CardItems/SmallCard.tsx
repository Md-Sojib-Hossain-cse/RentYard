const SmallCard = ({
  logo,
  title,
  subTitle,
  isSelected,
  onClick,
}: {
  logo: string;
  title: string;
  subTitle: string;
  isSelected: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-4 border w-full rounded-xl p-3 md:p-4 lg:p-5 ${
        isSelected ? "bg-[#F9FBFF] border-[#316EED]" : "border-[#E0E0E0]"
      }`}
    >
      <img
        src={logo}
        alt="logo"
        className="bg-[#F9FBFF] p-3 lg:p-[14px] rounded-lg"
      />
      <div className="space-y-1.5">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm font-medium">{subTitle}</p>
      </div>
    </div>
  );
};

export default SmallCard;
