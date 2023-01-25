import { showModal } from './modal';

export function showWinnerModal(fighter) {
  const modalInfo = {
    title: 'The WINNER',
    bodyEl: fighter.name
  };
  showModal(modalInfo);
}
