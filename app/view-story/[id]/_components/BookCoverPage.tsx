import Image from "next/image";
import React from "react";

function BookCoverPage() {
  return (
    <div>
      <Image
        src={"/read-book.webp"}
        alt="read-book"
        width={500}
        height={500}
      />
    </div>
  );
}

export default BookCoverPage;
