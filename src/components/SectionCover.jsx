import './SectionCover.css';

const SectionCover = ({img, title, text}) => {
    return (
        <div>
            <div className="hero h-[500px] object-cover" style={{ backgroundImage: `url(${img})` }}>
                <div className=""></div>
                <div className="hero-content bg-black bg-opacity-50 py-16 px-96 text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{text}</p>                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;