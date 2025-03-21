type LeadsEmbedProps = {
  url: string;
};

const LeadsEmbed = ({ url }: LeadsEmbedProps) => {
  return (
    <>
      <iframe
        src={url}
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
      />
    </>
  );
};

export default LeadsEmbed;
