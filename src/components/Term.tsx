interface TermProps {
    title: string;
    description: string;
    }

export default function Term( {title, description} : TermProps) {
  return (
    <div className='terms'>
          <h1 className="termTitle">{title}</h1>
          <p>{description}</p>
        </div>
  );
}