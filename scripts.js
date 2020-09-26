'use strict';

const DAMAGE = 20;

function random(num) {
  return Math.ceil(Math.random() * num )
}

class Member {
  constructor(name, progressElId, textElId){
    this.name = name;
    this.health = 100;
    this.damage = 100;
    this.textEl = document.getElementById(textElId);
    this.progressEl = document.getElementById(progressElId);
  }

  getDamageValue() {
    return this.damage;
  }

  setDamageValue(num) {
    this.damage = num;
  }

  render() {
    this.progressEl.style.width = `${this.damage}%`;
    this.textEl.innerHTML = `${this.health} / ${this.damage}`;
  }
}

function changeDamage(person, btn) {
  if (person.getDamageValue() <= 0) return;
  let value = person.getDamageValue() - random(DAMAGE);
  if (value <= 0) {
    value = 0;
    btn.disabled = true;
  }
  person.setDamageValue(value);
  person.render();
}

function init() {
  const pikachu = new Member('Pikachu', 'progressbar-character', 'health-character');
  const enemy = new Member('Charmander', 'progressbar-enemy', 'health-enemy');

  const beatMeButton = document.getElementById('btn-kick');
  beatMeButton.addEventListener('click', () => {changeDamage(pikachu, beatMeButton)});

  const beatEnemybutton = document.getElementById('btn-kick1');
  beatEnemybutton.addEventListener('click', () => {changeDamage(enemy, beatEnemybutton)});
}

init();

