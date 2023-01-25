import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`
  });

  function createName(nameValue) {
    const nameElement = createElement({ tagName: 'span', className: 'fighter-preview__name' });
    nameElement.innerText = nameValue.join(': ').replace('\n').toUpperCase();
    return nameElement;
  }

  function createImage(source) {
    const attributes = { src: source };
    return createElement({
      tagName: 'img',
      className: 'fighter-preview__image',
      attributes
    });
  }
  if (fighter) {
    const nameValueObject = Object.entries(fighter);
    fighterElement.append(createImage(fighter['source']));
    nameValueObject
      .filter((nameValueArray) => nameValueArray[0] !== '_id' && nameValueArray[0] !== 'source')
      .forEach((nameValue) => fighterElement.append(createName(nameValue)));
  }
  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = {
    src: source,
    title: name,
    alt: name
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes
  });

  return imgElement;
}
