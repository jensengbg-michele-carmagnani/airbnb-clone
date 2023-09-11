import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import TripsClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  console.log("CU PropertisPage", currentUser);
  const listings = await getListings({ userId: currentUser?.id });
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized " subtitle="Please login" />
      </ClientOnly>
    );
  }
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Properties Found"
          subtitle="Looks like you have no properties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
