
import PropTypes  from "prop-types";
const Container = ({children,className}) => {
   return(
      <div className={`container mx-auto px-2 ${className}`}>
          {children}
      </div>
   )
}
   
Container.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
}
export default Container;