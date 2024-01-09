import PropTypes from "prop-types";

const Title = ({ titleHeader, title, titleClassName }) => {
   return(
      <div className={`text-center mb-10 `}>
         <p className="italic text-[#D99904] text-xl py-4 font-medium">{titleHeader}</p>
         <h1 className={`text-[40px] text-[#151515] border-y-[4px] font-medium px-16 w-max mx-auto py-5 ${titleClassName}`}>{title}</h1>
      </div>
   )
}
Title.propTypes = {
   titleHeader: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   titleClassName: PropTypes.string
}
export default Title;