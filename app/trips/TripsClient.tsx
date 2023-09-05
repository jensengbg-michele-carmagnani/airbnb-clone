"use client";
import { SafeReservation, SafeUser } from "../types";
import { Container } from "../components/inputs/Container";
import ListingCard from "../components/listings/ListingCard";
import Heading from "../components/Heading";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser: SafeUser;
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const [deletingId, setDeletingId] = useState("");
  const router = useRouter();
  const onCancel = useCallback((id: string) => {
    setDeletingId(id);
    axios
      .delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success("Reservation cancelled");
        router.refresh();
      })
      .catch((error) => {
        toast.error(error?.data?.error);
      })
      .finally(() => {
        setDeletingId("");
      });
  }, []);
  return (
    <Container>
      <Heading title="Trips" subtitle="Where you have been where you'll go!" />
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
        {reservations.map((reservation) => (
          <ListingCard
            data={reservation.listing}
            key={reservation.id}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
