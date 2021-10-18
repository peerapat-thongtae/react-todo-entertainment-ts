const PersonHelper = {
  posterPath: (path: string) => {
    if (!path) {
      return '/poster/defaultposter.png';
    }
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${path}`;
  },
  calculateAge: (date: any) => {
    const birthdate = new Date(date);
    const today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age -= 1;
    }
    return age;
  },
};

export default PersonHelper;
