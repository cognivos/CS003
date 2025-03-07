"use client";

import React, { useRef } from 'react';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { UserRoundPlus } from 'lucide-react';
import AddSellerForm from './add-seller-form';

const AddSellerDialog: React.FC = () => {

    const closeRef = useRef<HTMLButtonElement>(null);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <UserRoundPlus />
                    Create Seller
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create New Seller Account
                    </DialogTitle>
                </DialogHeader>
                <hr />
                <AddSellerForm closeRef={closeRef} />
                <DialogClose ref={closeRef}></DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default AddSellerDialog;
