document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // Select primary and fallback collections
  const primaryCollection = document.querySelector('[data-primary-collection]');
  const fallbackCollection = document.querySelector('[data-fallback-collection]');
  console.log('Primary Collection:', primaryCollection);
  console.log('Fallback Collection:', fallbackCollection);

  const primaryItems = primaryCollection?.querySelectorAll('[data-item]');
  const fallbackItems = fallbackCollection?.querySelectorAll('[data-item]');
  console.log('Initial Primary Items:', primaryItems);
  console.log('Initial Fallback Items:', fallbackItems);

  // Check the count of items in the primary collection
  let primaryItemCount = primaryItems?.length ?? 0;
  console.log('Initial Primary Item Count:', primaryItemCount);

  // Hide the primary collection if it's initially empty
  if (primaryItemCount === 0) {
    console.log('Primary collection is empty. Hiding primary and showing fallback.');
    primaryCollection?.setAttribute('style', 'display: none;');
    fallbackCollection?.removeAttribute('style');
  } else {
    // If the primary collection is not empty but has less than 3 items
    if (primaryItemCount < 3) {
      console.log('Primary collection has less than 3 items. Moving items from fallback.');
      // Calculate the number of items to move from fallback to primary
      const itemsToMove = 3 - primaryItemCount;
      console.log('Items to Move:', itemsToMove);

      // Move items from the fallback collection
      for (let i = 0; i < itemsToMove; i++) {
        const itemToMove = fallbackItems?.item(i);
        console.log(`Moving item ${i} from fallback to primary:`, itemToMove);
        if (itemToMove) {
          primaryCollection?.appendChild(itemToMove);
        }
      }
    }

    // Recheck the item count in the primary collection
    primaryItemCount = primaryCollection?.querySelectorAll('[data-item]').length ?? 0;
    console.log('Rechecked Primary Item Count:', primaryItemCount);

    // Update the visibility of the primary and fallback collections based on the new item count
    if (primaryItemCount >= 3) {
      console.log('Primary collection now has 3 or more items. Hiding fallback.');
      primaryCollection?.removeAttribute('style');
      fallbackCollection?.setAttribute('style', 'display: none;');
    } else {
      console.log('Less than 3 items in primary after moving. Adjusting visibility.');
      primaryCollection?.removeAttribute('style');
      fallbackCollection?.removeAttribute('style');
    }
  }
});
