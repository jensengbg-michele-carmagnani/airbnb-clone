import getListingById from "@/app/actions/getListinfByid";
import React from "react";

interface Iparams {
  listingId?: string;
}

const Listing = async ({ params }: { params: Iparams }) => {
  const listing = await getListingById(params);
  return <div>{JSON.stringify(listing)}</div>;
};

export default Listing;
