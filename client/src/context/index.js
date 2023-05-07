import React, { useContext, createContext} from "react";

import { useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react';

import { ethers } from "ethers";

const Context = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x8627E804fDc4faE38B081F34033E2FC4Ee93A8f7');
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');
    const address = useAddress();
    const connect = useMetamask();


    const publicCampaigns = async () => {
        try {
            const data = await createCampaign([
                address, 
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ])

            console.log("Contract call success",data);

        } catch (error) {
            console.log("Contract call success",error);
        }



        
    }

}
