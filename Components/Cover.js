import Image from "next/image";

const Cover = () => {
    return (
        <Image src={'/blogjpeg'} alt="cover photo in blog"  width={1300}height={300}   />
    );
};

export default Cover;