import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ userId: currentUser?.id });
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized " subtitle="Please login" />
      </ClientOnly>
    );
  }
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found  "
          subtitle="Looks like you haven't reseverd any tryps"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripsPage;
