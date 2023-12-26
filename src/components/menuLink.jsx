import { NavLink } from "react-router-dom";
export default function SmartLink({target, wording})
{
    return(
        <NavLink to={target} style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontSize: isActive ? "1.1rem" : '',
              fontWeight: isActive ? "bold" : '',
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}>
                {wording}
                </NavLink>
    )
}