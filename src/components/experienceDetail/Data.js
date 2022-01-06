/**
 * dummy data for each component are placed in a separate file
 * */
import userLogoImage from "../../images/userLogo.png";
import defiSwapImage from "../../images/defiSwap.png";
import docuSignImage from "../../images/docuSign.png";

export const experienceDetailData = [
    {
        "id" : 1,
        "title": "Docu sign",
        "image": docuSignImage,
        "label": "sign smart contracts seamlessly",
        "usersCount": "+1K users",
        "overview":"it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime paperlessly.",
        "url":"https://docusign.io",
        "activities":[
            {
                "userName" : "johndoe.near",
                "image":userLogoImage,
                "description" : "johndoe.near signed the contract successfully",
                "date" : "2 days ago"
            },
            {
                "userName" : "CryptoKing.near",
                "image":userLogoImage,
                "description" : "CryptoKing.near requested to sign the contract",
                "date" : "3 days ago"
            },
            {
                "userName" : "maxwell.near",
                "image":userLogoImage,
                "description" : "maxwell.near requested to sign the contract",
                "date" : "3 days ago"
            }
        ]
    },
    {
        "id" : 2,
        "title": "Defi swap",
        "image": defiSwapImage,
        "label": "Swap your digital assets",
        "usersCount": "+1K users",
        "overview":"it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime paperlessly.",
        "url":"https://docusign.io",
        "activities":[
            {
                "userName" : "johndoe.near",
                "image":userLogoImage,
                "description" : "johndoe.near signed the contract successfully",
                "date" : "2 days ago"
            },
            {
                "userName" : "CryptoKing.near",
                "image":userLogoImage,
                "description" : "CryptoKing.near requested to sign the contract",
                "date" : "3 days ago"
            },
            {
                "userName" : "maxwell.near",
                "image":userLogoImage,
                "description" : "maxwell.near requested to sign the contract",
                "date" : "3 days ago"
            }
        ]
    }
]