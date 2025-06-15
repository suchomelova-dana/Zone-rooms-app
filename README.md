# Zones-rooms-APP

Jednoduchá applikace pro správu zón a místností

## Zadání
Vypracuj jednoduchou aplikaci v Reactu s TypeScriptem. Jakou knihovnu pro správu stavů zvolíš, necháváme na Tobě.

Aplikace by měla pracovat se dvěma typy entit: zóny a místnosti. 

### Datový model

- Zóna může obsahovat 0 až N místností.
- Místnost může být přiřazena pouze jedné zóně.
- Každá zóna i místnost má vlastní název (nastavitelný při vytvoření).
- U místnosti lze při vytvoření zadat objem a plochu.
- Zóna si vypočítá součet objemů a ploch všech svých místností.


### Požadovaná funkcionalita

- Přidání nové místnosti
- Odstranění místnosti
- Přidání nové zóny
- Odstranění zóny
- Přiřazení místnosti do zóny
- Odebrání místnosti ze zóny (zůstane nezařazená)
- Možnost otevřít dialog u zóny se seznamem jejích místností


## Technologie

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [React-hook-form](https://react-hook-form.com/)

## Screenshoty

![title](/src/assets/app-screenshot.png)
