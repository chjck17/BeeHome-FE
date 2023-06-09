import { useState } from 'react';

const PropertyDescriptions = ({ description }) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <p
        className="mb25"
        dangerouslySetInnerHTML={{
          __html: description?.replace(/\n/g, '<br/>'),
        }}
      ></p>
    </>
  );
};

export default PropertyDescriptions;
