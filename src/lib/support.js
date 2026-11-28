// respondRalert support details (confirmed by Deborah Smart, Operations,
// 29 Nov 2026). Change them here only.
export const SUPPORT = {
  company: "TAVEWO Ventures Ltd",
  rcNumber: "7826628",
  address: "24 Abebi Shopping Complex, Mosafejo Bus Stop, Ibadan, Oyo State, Nigeria",
  email: "cmsupport@tavewo.com",
  phones: ["+234 703 078 6368", "+234 904 743 2641"],
  hours: "Monday to Friday, 9am to 5pm",
};

export const telHref = (phone) => `tel:${phone.replace(/\s+/g, "")}`;
