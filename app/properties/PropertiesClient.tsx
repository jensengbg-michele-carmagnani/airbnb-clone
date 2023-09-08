"use client";
import { SafeListing, SafeUser } from "../types";
import { Container } from "../components/inputs/Container";
import ListingCard from "../components/listings/ListingCard";
import Heading from "../components/Heading";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface TripsClientProps {
  listings: SafeListing[];
  currentUser: SafeUser | null;
}

const PropertiesClient: React.FC<TripsClientProps> = ({
  listings,
  currentUser,
}) => {
  const [deletingId, setDeletingId] = useState("");
  const router = useRouter();
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listing deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading title="Propertis" subtitle="List of your properties" />
      <div
        className=" mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8"
      >
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            actionId={listing.id}
            data={listing}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
