export function formatDate(timestamp) {
  const currentDate = new Date(timestamp);
  const postDate = new Date();

  const currentSeconds = currentDate.getSeconds();
  const postSeconds = postDate.getSeconds();
  const secondsSincePosting = postSeconds - currentSeconds;

  const currentMinutes = currentDate.getMinutes();
  const postMinutes = postDate.getMinutes();
  const minutesSincePosting = postMinutes - currentMinutes;

  const currentHours = currentDate.getHours();
  const postHours = postDate.getHours();
  const hoursSincePosting = postHours - currentHours;

  const timeDiff = postDate.getTime() - currentDate.getTime();

  const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years === 1) {
    return `${years} year ago`;
  } else if (years > 1) {
    return `${years} years ago`;
  } else if (months === 1) {
    return `Last month`;
  } else if (months > 1) {
    return `${months} months ago`;
  } else if (weeks === 1) {
    return `Last week`;
  } else if (weeks > 1) {
    return `${weeks} weeks ago`;
  } else if (days === 1) {
    return `Yesterday`;
  } else if (days > 1) {
    return `${days} days ago`;
  } else if (hoursSincePosting === 1) {
    return `An hour ago`;
  } else if (hoursSincePosting >= 1) {
    return `${hoursSincePosting} hours ago`;
  } else if (minutesSincePosting === 1) {
    return `${minutesSincePosting} minute ago`;
  } else if (minutesSincePosting > 1) {
    return `${minutesSincePosting} minutes ago`;
  } else if (secondsSincePosting <= 1) {
    return `Just now`;
  } else {
    return `${secondsSincePosting} seconds ago`;
  }
}
