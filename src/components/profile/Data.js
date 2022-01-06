/**
 * dummy data for each component are placed in a separate file
 * */
import userLogoImage from "../../images/userLogo.png";
import defiSwapImage from "../../images/defiSwap.png";
import docuSignImage from "../../images/docuSign.png";

export const Profile = {
    "id": 1,
    "username": "devon.near",
    "firstName": "Devon",
    "lastName": "Lane",
    "email": "devonlane@gmail.com",
    "collectibles": [
        {
            "title": "Digital Ninja",
            "by": "devon.near",
            "image": userLogoImage
        },
        {
            "title": "Panda",
            "by": "devon.near",
            "image": userLogoImage
        },
        {
            "title": "Digital Ninja",
            "by": "devon.near",
            "image": userLogoImage
        }
    ],
    "connectionExperiences": [
        {
            "title": "Docu sign",
            "image": docuSignImage,
            "connectionDate": "12/10/2021 12:30 PM",
            "status": "Disconnect"
        },
        {
            "title": "Defi swap",
            "image": defiSwapImage,
            "connectionDate": "12/10/2021 12:30 PM",
            "status": "Disconnect"
        }
    ]
}

export const Contacts = [
    {
        "id": 1,
        "userId": 1,
        "fullName": "Devon Lane",
        "email": "devonlane@gmail.com",
        "phone": "222222222",
        "nearAccountId": "0101"
    }
]