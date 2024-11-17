let Header = `
<nav class="menu">
    <ul class="topmenu">
      <li><a href="index.html" class="menulink">Встречи на кухне</a></li>
      |
      <li><a href="georgian.html" class="menulink">Грузинская</a>
        <ul class="submenu">
          <li><a href="georgian.html#suluguni" class="menulink">Сулугуни</a></li>
          <li><a href="georgian.html#khinkali" class="menulink">Хинкали</a></li>
          <li><a href="georgian.html#mumuzhi" class="menulink">Мумужи</a></li>
        </ul>
      </li>
      |
      <li><a href="belarus.html" class="menulink">Белорусская</a>
        <ul class="submenu">
          <li><a href="belarus.html#borsch" class="menulink">Борщ</a></li>
          <li><a href="belarus.html#draniki" class="menulink">Драники</a></li>
          <li><a href="belarus.html#perec" class="menulink">Отварной перец</a></li>
        </ul>
      </li>
      |
      <li><a href="italian.html" class="menulink">Итальянская</a>
        <ul class="submenu">
          <li><a href="italian.html#tortellini" class="menulink">Тортеллини</a></li>
          <li><a href="italian.html#pasta" class="menulink">Паста болоньезе</a></li>
          <li><a href="italian.html#calzone" class="menulink">Кальцоне</a></li>
        </ul>
      </li>
      | 
      <li><a href="karelian.html" class="menulink">Карельская</a>
        <ul class="submenu">
          <li><a href="karelian.html#kalitki" class="menulink">Калитки</a></li>
          <li><a href="karelian.html#kalakeitto" class="menulink">Калакейтто</a></li>
          <li><a href="karelian.html#graavilohi" class="menulink">Граавилохи</a></li>
        </ul>
      </li>
      |
      <li><a href="register.html" class="menulink">Регистрация</a></li>
    </ul>
</nav>
`;
document.getElementById("header-site").innerHTML = Header;