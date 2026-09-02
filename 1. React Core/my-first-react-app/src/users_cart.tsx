
// একটা React component-এর কাছে props একটি object হিসেবে আসে, এবং সেই object-এর মধ্যে multiple properties থাকতে পারে। Destructuring হলো সেই properties-গুলোকে সরাসরি variable হিসেবে বের করে নেওয়ার shortcut।

export default function UserCart({name, available}){
    return <h2>name: {name}, Availability: {available.toString()}</h2>
}