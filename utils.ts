export const isAprilFirstOfferActive = (): boolean => {
  const now = new Date();
  // Offer ends April 2nd, 2026, 00:00:00 IST
  // Since we are in UTC, IST is UTC+5:30
  // April 1st 23:59:59 IST is April 1st 18:29:59 UTC
  const offerEndUTC = new Date(Date.UTC(2026, 3, 1, 18, 29, 59)); // Month is 0-indexed, so 3 is April
  return now <= offerEndUTC;
};
