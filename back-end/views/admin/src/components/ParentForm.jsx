import FormComponent from "./Form";
import FooterV from "./Footer-v";
import N from "./NavbarV";

const ParentForm=()=>{
    return(
        <div>
        <N></N>
        <FormComponent></FormComponent>
        <FooterV></FooterV>
        </div>
    );

};
export default ParentForm;