import ProfileForm from "../../components/ProfileForm/ProfileForm";
import "./EditProfile.css"

export default function EditProfile({ user }){
    
    return(
        <>

        <ProfileForm user={ user } />
        </>

    )
}