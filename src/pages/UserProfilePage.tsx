import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi'
import UserProfileForm from '@/components/forms/user-profile-form/UserProfileForm'

export default function UserProfilePage() {
    const {updateUser, isLoading: isgetLoading} = useUpdateMyUser();
    const {currentUser, isLoading: isUpdateLoading} = useGetMyUser();

    if(isgetLoading){
        return <span>Loading...</span>
    }

    if(!currentUser){
        return <span>Unable to load user profile</span>
    }

  return (
    <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>
  );
};
