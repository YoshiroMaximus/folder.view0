# FolderView0 for Unraid 7+

Group Docker containers and VMs into folders on the Docker and VMs tabs. Adds an **Add Folder**
button next to "Add Container/VM". Handy if you run a lot of containers, especially with
docker-compose.

Maintained by [YoshiroMaximus](https://github.com/YoshiroMaximus).

## Install

Paste this into **Plugins → Install Plugin**:

```
https://raw.githubusercontent.com/YoshiroMaximus/folder.view0/main/folder.view0.plg
```

Requires Unraid 7.0.0 or newer.

### Coming from FolderView2 or FolderView

Your folders come across automatically. On first install, `docker.json` and `vm.json` are copied
from `/boot/config/plugins/folder.view2` (or `folder.view`) into `/boot/config/plugins/folder.view0`.
The originals are left alone, so uninstall the old plugin once you are happy.

Container labels still work as-is. `folder.view0`, `folder.view2`, and `folder.view` are all
accepted.

## Why this fork

[VladoPortos/folder.view2](https://github.com/VladoPortos/folder.view2) stopped tracking changes in
current Unraid 7.x, so several things were quietly broken. Renamed to `folder.view0` so it installs
and updates independently.

Fixed here:

* Folder CPU and memory always showed 0
* Compose and 3rd-party containers could not be added to folders, or get a hover preview
* VM folder rows spanned 7 of the VM table's 8 columns
* False "Incorrect autostart order" warning
* Docker tab load time: 276KB of charting no longer blocks render, and the container update-status
  file is read once per request instead of once per container

See the changelog in `folder.view0.plg` for the detail on each.

### Also the other fork (folder.view3) seems very bloated and overworked.

## Building

`./pkg_build.sh` packages `src/folder.view0/` into `archive/`, stamps the version from today's date,
and updates the version and MD5 in `folder.view0.plg`. Same-day rebuilds get a `.1`, `.2` suffix
automatically. Always bump the version for a change you intend to ship, since Unraid compares
version strings and ignores content.

## Support

[Open an issue](https://github.com/YoshiroMaximus/folder.view0/issues).

## Credits

* [scolcipitato](https://github.com/scolcipitato/folder.view), original author
* [VladoPortos](https://github.com/VladoPortos/folder.view2), FolderView2
* [TurboStreetCar](https://github.com/TurboStreetCar), Unraid 7 compatibility for `folder.js`
* [JohannesHo](https://github.com/JohannesHo), docker preview layout fix

Upstream's author takes coffee at [ko-fi.com/vladoportos](https://ko-fi.com/vladoportos).

Built with [Chart.js](https://www.chartjs.org/), [Moment.js](https://momentjs.com/),
[chartjs-plugin-streaming](https://github.com/nagix/chartjs-plugin-streaming),
[jquery.i18n](https://github.com/wikimedia/jquery.i18n), and
[jQuery UI MultiSelect](https://github.com/ehynds/jquery-ui-multiselect-widget).
