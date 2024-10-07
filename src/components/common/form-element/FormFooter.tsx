import Link from "next/link";

interface FormFooterProps {
  text: string;
  linkText: string;
  linkHref: string;
  forgetPassHref: string;
}

const FormFooter: React.FC<FormFooterProps> = ({
  text,
  linkText,
  linkHref,
  forgetPassHref,
}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="text-sm text-gray-600 flex items-center">
        <p>{text} </p>
        <Link href={linkHref}>
          <span className="font-bold ml-1">{linkText}</span>
        </Link>
      </div>
      <Link href={forgetPassHref}>
        <span className="font-bold ml-1 text-xs">Forgot Password?</span>
      </Link>
    </div>
  );
};

export default FormFooter;
