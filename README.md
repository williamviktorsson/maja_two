# Prerequisites

1. Ladda ned git: <https://git-scm.com/downloads>
2. Ladda ned GitHub Desktop: <https://desktop.github.com/>
3. Skapa ett konto på GitHub med ert @edu google konto: <https://github.com/>
4. Ladda ned tillägget (extension) 'Live Server' i Visual Studio Code.
5. Gå till inställningar -> ssh keys på din användare på GitHub.
6. Öppna powershell och skapa en ssh-nyckel (**BYT UT USERNAME MOT DITT USERNAME!!**)

```bash
ssh-keygen -t rsa -b 4096 -C "username@edu.umea.se" 
```

7. Skriv ut ssh-nyckeln

```bash
cat ~/.ssh/id_rsa.pub 
```

8. Kopiera utskriften och spara nyckeln på github (Gå till inställningar -> ssh keys på din användare på GitHub.)

9. Kopiera URLen för detta repo: 

```bash
git@github.com:wilvik05/maja_two.git
```

10. I GitHub Desktop, välj ny File -> Clone repository -> URL och paste URL från ovan. Du kan också välja mapp på datorn som mappen maja_two kommer sparas i. När du är klar kan du trycka show in explorer för att öppna mappen på datorn.