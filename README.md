Домашнее задание к интенсиву «[Создаём сайт-приложение для трёх платформ за один день](https://webinar.skillbox.ru/frontend-app)», проведенному SkillBox 30 января 2021. Запись интенсива доступна [здесь](https://live.skillbox.ru/webinars/code/sozdayom-sait-prilozhenie-dlya-3-platform-za-odin-den300121/). Макет для верстки доступен в [Figma](https://www.figma.com/file/Pvf4Uv4ShOFVzczuHvsxyy/Avia_Tickets-(Copy)).

# Домашнее задание. Часть 1. Веб-приложение

Демонстрация в [CodePen](https://codepen.io/inventivespark/full/YzpXWvq) и в [StackBlitz](https://web-platform-uxwkmi.stackblitz.io/).

Исходный код в [CodePen](https://codepen.io/inventivespark/pen/YzpXWvq) и в [StackBlitz](https://stackblitz.com/edit/web-platform-uxwkmi).


# Домашнее задание. Часть 2. Настольное приложение

[![Демонстрация работы настольного приложения](https://yt-embed.herokuapp.com/embed?v=VE5FY9qCOX8)](https://www.youtube.com/watch?v=VE5FY9qCOX8Y "Демонстрация работы настольного приложения")

Подробности работы с фреймворком Electron рассмотрены в [статье](https://habr.com/ru/company/ruvds/blog/436466/).

## Подготовка

### Установите платформу Node.js

Инсталлятор можно скачать по ссылке [https://nodejs.org](https://nodejs.org).

### Установите Electron Forge

Выполните глобальную установку Electron Forge с помощью следующей команды:

```bash
npm install -g electron-forge
```

## Клонируйте код

Клонируйте код с помощью команды:

```bash
git clone https://github.com/InventiveSpark/skillbox-avia-live.git
```

## Запустите приложение

Войдите в папку проекта и запустите приложение с помощью следующего набора команд:

```bash
cd skillbox-avia-live
npm i
npm start
```

## Упакуйте приложение

Чтобы упаковать приложение, воспользуйтесь следующей командой:

```bash
npm run package
```

При вызове этой команды без параметров, создается исполняемый файл приложения для той платформы, которая используется в ходе разработки. Файлы будет помещены в папку out, которая будет создана в папке проекта.

## Создайте установочный файл приложения

Чтобы создать установочный файл приложения, воспользуйтесь следующей командой:

```bash
npm run make
```

Установочные файлы будут размещены в папке out.
