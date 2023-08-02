import { Banner, Reservation } from '../container';

const BookTable = () => {
  return (
    <>
      <Banner heading="Make A Reservation" page="Book A Table" />
      <Reservation />
    </>
  );
};

export default BookTable;
