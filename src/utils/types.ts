export interface Match {
  url: String;
  title: String;
  thumbnail: String;
  embed: String;
  date: Date;
  side1: {
    name: String;
    url: String;
  };
  side2: {
    name: String;
    url: String;
  };
  competition: {
    id: Number;
    name: String;
    url: String;
  };
  videos: Array<{
    _id: String;
    title: String;
    embed: String;
  }>;
}

export interface PageStatus {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  limit: Number;
  nextPage: Number;
  page: Number;
  pagingCounter: Number;
  prevPage: Number;
  totalDocs: Number;
  totalPages: Number;
}
