
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center p-4">
            <p className="text-[#D99904] text-xl py-3">{subHeading}</p>
            <div className="w-96 h-1 bg-[#444343] mx-auto rounded-full"></div>
            <h2 className="text-[#151515] text-4xl uppercase py-3">{heading}</h2>
            <div className="w-96 h-1 bg-[#444343] mx-auto rounded-full"></div>
        </div>
    );
};

export default SectionTitle;