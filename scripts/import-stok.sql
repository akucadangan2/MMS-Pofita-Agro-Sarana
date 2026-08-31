-- Import stok awal (Kts. Stok) ke lokasi Lantai 1, hasil dari satuan.csv

insert into stock (item_id, location_id, qty)
select items.id, locations.id, 250
from items, locations
where items.kode = 'ABA-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 270
from items, locations
where items.kode = 'ABD-40GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 380
from items, locations
where items.kode = 'ABJ 60WP-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1196
from items, locations
where items.kode = 'ABJ 60WP-50GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 700
from items, locations
where items.kode = 'ABO-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4676
from items, locations
where items.kode = 'ABO-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1953
from items, locations
where items.kode = 'ABO-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 500
from items, locations
where items.kode = 'ABS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1166
from items, locations
where items.kode = 'ABT-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6190
from items, locations
where items.kode = 'ABT-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'ABU-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 357
from items, locations
where items.kode = 'ABU-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 121
from items, locations
where items.kode = 'ABU-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3784
from items, locations
where items.kode = 'ACE-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'ACR-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6760
from items, locations
where items.kode = 'ACR-10GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 944
from items, locations
where items.kode = 'ACR-40GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'ACTRN-100G'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3154
from items, locations
where items.kode = 'ADL-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 900
from items, locations
where items.kode = 'AFNL-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 857
from items, locations
where items.kode = 'AGE-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 788
from items, locations
where items.kode = 'AGE-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2369
from items, locations
where items.kode = 'AGK-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 180
from items, locations
where items.kode = 'AGMC-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 480
from items, locations
where items.kode = 'AGMC-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 73260
from items, locations
where items.kode = 'AGT-75S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 17440
from items, locations
where items.kode = 'AGT-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 940
from items, locations
where items.kode = 'AGU-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 725
from items, locations
where items.kode = 'AGU-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2840
from items, locations
where items.kode = 'AJN-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 40
from items, locations
where items.kode = 'AJO-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1790
from items, locations
where items.kode = 'AKO-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 500
from items, locations
where items.kode = 'AKP-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 44
from items, locations
where items.kode = 'AKP-TANIKU'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2140
from items, locations
where items.kode = 'ALA-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'ALA-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1479
from items, locations
where items.kode = 'ALI-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6
from items, locations
where items.kode = 'ALJ-SINGLE'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8131
from items, locations
where items.kode = 'ALK-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2090
from items, locations
where items.kode = 'ALK-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 260
from items, locations
where items.kode = 'ALL-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8560
from items, locations
where items.kode = 'ALL-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'ALR-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 15
from items, locations
where items.kode = 'ALS-F1'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 340
from items, locations
where items.kode = 'AM-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21045
from items, locations
where items.kode = 'AMA-360S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 51580
from items, locations
where items.kode = 'AMA-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1840
from items, locations
where items.kode = 'AMB-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'AMB-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 160
from items, locations
where items.kode = 'AMB-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 430
from items, locations
where items.kode = 'AMC-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 660
from items, locations
where items.kode = 'AME-25S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'AME-360S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 160
from items, locations
where items.kode = 'AMI-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1491
from items, locations
where items.kode = 'AMI-RG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 47831
from items, locations
where items.kode = 'AMI-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 67
from items, locations
where items.kode = 'AMK-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 380
from items, locations
where items.kode = 'AMM-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 150
from items, locations
where items.kode = 'AMR-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5004
from items, locations
where items.kode = 'AMS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 400
from items, locations
where items.kode = 'AMS-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1182
from items, locations
where items.kode = 'AMS-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10678
from items, locations
where items.kode = 'AMS-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 725
from items, locations
where items.kode = 'AMSN-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'AMTG-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'AN-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 12987
from items, locations
where items.kode = 'ANG-75S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9300
from items, locations
where items.kode = 'ANG-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1893
from items, locations
where items.kode = 'ANT-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8861
from items, locations
where items.kode = 'ANT-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3893
from items, locations
where items.kode = 'ANT-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 800
from items, locations
where items.kode = 'AP-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'AP0-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'APC-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 600
from items, locations
where items.kode = 'APT-20GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1440
from items, locations
where items.kode = 'AQUI-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 480
from items, locations
where items.kode = 'ARG-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 170
from items, locations
where items.kode = 'ARZN-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 480
from items, locations
where items.kode = 'ASM90% 250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 185
from items, locations
where items.kode = 'ASP-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 18
from items, locations
where items.kode = 'ASP-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 120
from items, locations
where items.kode = 'ASR-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 500
from items, locations
where items.kode = 'AST-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 423
from items, locations
where items.kode = 'AST-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1003
from items, locations
where items.kode = 'AST-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 160
from items, locations
where items.kode = 'AST-400GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 48
from items, locations
where items.kode = 'AST-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1795
from items, locations
where items.kode = 'AST60-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 575
from items, locations
where items.kode = 'AT-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 159
from items, locations
where items.kode = 'AT-200GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 180
from items, locations
where items.kode = 'AT-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'ATC-100G'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 19
from items, locations
where items.kode = 'ATM-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1335
from items, locations
where items.kode = 'ATO-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1050
from items, locations
where items.kode = 'ATO-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2076
from items, locations
where items.kode = 'ATO-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6762
from items, locations
where items.kode = 'ATR-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'ATZ-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 152
from items, locations
where items.kode = 'ATZ-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1400
from items, locations
where items.kode = 'AUR-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 783
from items, locations
where items.kode = 'AV-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'AVN-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'AZ-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2014
from items, locations
where items.kode = 'B-MBN'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3200
from items, locations
where items.kode = 'BAD-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 388
from items, locations
where items.kode = 'BAD-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 140
from items, locations
where items.kode = 'BAF -500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 36040
from items, locations
where items.kode = 'BAG-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1710
from items, locations
where items.kode = 'BAN-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 27230
from items, locations
where items.kode = 'BAN-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1555
from items, locations
where items.kode = 'BAR-800S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7660
from items, locations
where items.kode = 'BAR-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8120
from items, locations
where items.kode = 'BARA-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 740
from items, locations
where items.kode = 'BAS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9650
from items, locations
where items.kode = 'BAS-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'BAS-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1577
from items, locations
where items.kode = 'BAS-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1700
from items, locations
where items.kode = 'BAS-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3103
from items, locations
where items.kode = 'BASM-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 262
from items, locations
where items.kode = 'BASM-5LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1
from items, locations
where items.kode = 'BASS-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 25620
from items, locations
where items.kode = 'BAT-800S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 11590
from items, locations
where items.kode = 'BAT-800SEEDS'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 83508
from items, locations
where items.kode = 'BAT-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1760
from items, locations
where items.kode = 'BDP-40GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'BDR-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 564
from items, locations
where items.kode = 'BEL-4KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'BEN 250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1349
from items, locations
where items.kode = 'BES-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2840
from items, locations
where items.kode = 'BES-50GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1200
from items, locations
where items.kode = 'BET-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 48
from items, locations
where items.kode = 'BFY-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 150
from items, locations
where items.kode = 'BGE-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 15
from items, locations
where items.kode = 'BGS-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 58
from items, locations
where items.kode = 'BLA-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2446
from items, locations
where items.kode = 'BLS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 987
from items, locations
where items.kode = 'BLS-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 54
from items, locations
where items.kode = 'BLT-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 277
from items, locations
where items.kode = 'BLT-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3334
from items, locations
where items.kode = 'BLT-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1820
from items, locations
where items.kode = 'BLZ-10GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1740
from items, locations
where items.kode = 'BMB -SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1
from items, locations
where items.kode = 'BMT-1LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3663
from items, locations
where items.kode = 'BNM-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 12462
from items, locations
where items.kode = 'BOB-1800S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 76321
from items, locations
where items.kode = 'BON-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6600
from items, locations
where items.kode = 'BON9-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 27240
from items, locations
where items.kode = 'BONN-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1382
from items, locations
where items.kode = 'BOO-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 700
from items, locations
where items.kode = 'BOO-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2900
from items, locations
where items.kode = 'BOR-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 107
from items, locations
where items.kode = 'BOR-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 250
from items, locations
where items.kode = 'BOS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2660
from items, locations
where items.kode = 'BP-1LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8
from items, locations
where items.kode = 'BRA-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 186
from items, locations
where items.kode = 'BRA-10LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'BRA-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 60
from items, locations
where items.kode = 'BRA-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 800
from items, locations
where items.kode = 'BRD-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8561
from items, locations
where items.kode = 'BRN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 299
from items, locations
where items.kode = 'BRN-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2982
from items, locations
where items.kode = 'BRN-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5590
from items, locations
where items.kode = 'BRX-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 156
from items, locations
where items.kode = 'BRX-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2551
from items, locations
where items.kode = 'BRX-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'BS-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 244
from items, locations
where items.kode = 'C45-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'C7B-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10391
from items, locations
where items.kode = 'CAL-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 480
from items, locations
where items.kode = 'CAL-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 101
from items, locations
where items.kode = 'CAL-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 320
from items, locations
where items.kode = 'CAL-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 71
from items, locations
where items.kode = 'CAM GOLD-10LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 660
from items, locations
where items.kode = 'CAM GOLD-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 75
from items, locations
where items.kode = 'CAM GOLD-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1386
from items, locations
where items.kode = 'CAM GOLD-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 380
from items, locations
where items.kode = 'CAM-10LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21037
from items, locations
where items.kode = 'CAN-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6457
from items, locations
where items.kode = 'CAN-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2634
from items, locations
where items.kode = 'CAN-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7797
from items, locations
where items.kode = 'CAP-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'CAP-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 898
from items, locations
where items.kode = 'CAP-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1150
from items, locations
where items.kode = 'CBF-2KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 400
from items, locations
where items.kode = 'CEN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'CEN-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2
from items, locations
where items.kode = 'CEN-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 901
from items, locations
where items.kode = 'CH-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 754
from items, locations
where items.kode = 'CH-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 216
from items, locations
where items.kode = 'CHL-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'CHLCYN-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 560
from items, locations
where items.kode = 'CHMR-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 48
from items, locations
where items.kode = 'CHMR-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2
from items, locations
where items.kode = 'CIP10%-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 22
from items, locations
where items.kode = 'CIP20%-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'CIPJA-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2782
from items, locations
where items.kode = 'CLH-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 325
from items, locations
where items.kode = 'CLM-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 33
from items, locations
where items.kode = 'CLM-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'CMB-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 625
from items, locations
where items.kode = 'CMB-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'CMD-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 625
from items, locations
where items.kode = 'CMD-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'CMLS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 11290
from items, locations
where items.kode = 'CMX-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 968
from items, locations
where items.kode = 'CMX-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4032
from items, locations
where items.kode = 'CMX-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 800
from items, locations
where items.kode = 'CNG 1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 400
from items, locations
where items.kode = 'CON-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1720
from items, locations
where items.kode = 'COP-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 582
from items, locations
where items.kode = 'COP-400GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'CORN-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1200
from items, locations
where items.kode = 'COVIT-PS'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3988
from items, locations
where items.kode = 'CPB'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 175
from items, locations
where items.kode = 'CPB1'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6357
from items, locations
where items.kode = 'CPN-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 23
from items, locations
where items.kode = 'CPN-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7225
from items, locations
where items.kode = 'CPN-2KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5120
from items, locations
where items.kode = 'CRU-12,5ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'CS-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 13
from items, locations
where items.kode = 'CSP-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 685
from items, locations
where items.kode = 'CU-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2
from items, locations
where items.kode = 'CUAN-20LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6134
from items, locations
where items.kode = 'CUR-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2676
from items, locations
where items.kode = 'CUR-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 790
from items, locations
where items.kode = 'CUR-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1238
from items, locations
where items.kode = 'CZE-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4371
from items, locations
where items.kode = 'DAI-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 11970
from items, locations
where items.kode = 'DAN-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2096
from items, locations
where items.kode = 'DAN-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1
from items, locations
where items.kode = 'DAPS-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1869
from items, locations
where items.kode = 'DBS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1551
from items, locations
where items.kode = 'DBS-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 27939
from items, locations
where items.kode = 'DDT-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8897
from items, locations
where items.kode = 'DDT-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 382
from items, locations
where items.kode = 'DEC-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1876
from items, locations
where items.kode = 'DEC-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 986
from items, locations
where items.kode = 'DEL-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 260
from items, locations
where items.kode = 'DEL-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1360
from items, locations
where items.kode = 'DEL-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2220
from items, locations
where items.kode = 'DEM-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3269
from items, locations
where items.kode = 'DEM-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2273
from items, locations
where items.kode = 'DEM-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 40
from items, locations
where items.kode = 'DEN-200GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 159
from items, locations
where items.kode = 'DEN-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 582
from items, locations
where items.kode = 'DEN-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 180
from items, locations
where items.kode = 'DEW-2250S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 705
from items, locations
where items.kode = 'DEW43-2250S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21000
from items, locations
where items.kode = 'DEW43-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7034
from items, locations
where items.kode = 'DEW76-2250S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 15880
from items, locations
where items.kode = 'DEW76-350S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1120
from items, locations
where items.kode = 'DEX-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1
from items, locations
where items.kode = 'DEX-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2173
from items, locations
where items.kode = 'DEX-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 481
from items, locations
where items.kode = 'DGW16-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2881
from items, locations
where items.kode = 'DGY-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 289
from items, locations
where items.kode = 'DIT-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1100
from items, locations
where items.kode = 'DIT-200GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1475
from items, locations
where items.kode = 'DIT-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 61
from items, locations
where items.kode = 'DLASM-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 945
from items, locations
where items.kode = 'DLGM 100- 50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 500
from items, locations
where items.kode = 'DLM-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1372
from items, locations
where items.kode = 'DMG-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4431
from items, locations
where items.kode = 'DMS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1310
from items, locations
where items.kode = 'DMS-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3
from items, locations
where items.kode = 'DP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2249
from items, locations
where items.kode = 'DSDG-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'DTN'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 380
from items, locations
where items.kode = 'DWG-10GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3980
from items, locations
where items.kode = 'DWG-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2520
from items, locations
where items.kode = 'E16-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 81
from items, locations
where items.kode = 'E16-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2090
from items, locations
where items.kode = 'E17 - 1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 162
from items, locations
where items.kode = 'E17-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'ELB-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3968
from items, locations
where items.kode = 'EM4-01'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3882
from items, locations
where items.kode = 'EM4-02'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7633
from items, locations
where items.kode = 'EM4-03'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1681
from items, locations
where items.kode = 'EM4-04'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 350
from items, locations
where items.kode = 'EMA-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 15
from items, locations
where items.kode = 'EMC-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2925
from items, locations
where items.kode = 'END-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5
from items, locations
where items.kode = 'ENT-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 19
from items, locations
where items.kode = 'ENT-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6
from items, locations
where items.kode = 'ENT-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5238
from items, locations
where items.kode = 'ENV-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1240
from items, locations
where items.kode = 'EXO-1750S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 28
from items, locations
where items.kode = 'EXO-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 400
from items, locations
where items.kode = 'EXO-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 210
from items, locations
where items.kode = 'EXON-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1602
from items, locations
where items.kode = 'EXP-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1644
from items, locations
where items.kode = 'EXP-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'FEN-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3333
from items, locations
where items.kode = 'FEN-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 960
from items, locations
where items.kode = 'FEN-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2773
from items, locations
where items.kode = 'FEN-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1988
from items, locations
where items.kode = 'FER NEW 50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 40
from items, locations
where items.kode = 'FER-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8971
from items, locations
where items.kode = 'FER-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 648
from items, locations
where items.kode = 'FIL-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3890
from items, locations
where items.kode = 'FIL-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 500
from items, locations
where items.kode = 'FIN-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 500
from items, locations
where items.kode = 'FIN-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 76695
from items, locations
where items.kode = 'FIT-2.5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4290
from items, locations
where items.kode = 'FIT-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 17572
from items, locations
where items.kode = 'FLG-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 224
from items, locations
where items.kode = 'FLG-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2560
from items, locations
where items.kode = 'FRM-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 630
from items, locations
where items.kode = 'FRM-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 275
from items, locations
where items.kode = 'FRTLHJ-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'FRTLMR-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2230
from items, locations
where items.kode = 'FSF-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1584
from items, locations
where items.kode = 'FT-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 11360
from items, locations
where items.kode = 'FUR-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 935
from items, locations
where items.kode = 'FUR-2KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 320
from items, locations
where items.kode = 'GAL-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10922
from items, locations
where items.kode = 'GANB-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1811
from items, locations
where items.kode = 'GANB-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7248
from items, locations
where items.kode = 'GAND-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2763
from items, locations
where items.kode = 'GAND-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 12760
from items, locations
where items.kode = 'GAR-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 891
from items, locations
where items.kode = 'GAR-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 192
from items, locations
where items.kode = 'GBJ-5LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 306
from items, locations
where items.kode = 'GBM-7 LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 174
from items, locations
where items.kode = 'GBM-7LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'GEM-11LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 580
from items, locations
where items.kode = 'GEM-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 17
from items, locations
where items.kode = 'GEM-3LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 540
from items, locations
where items.kode = 'GEM-9LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 65472
from items, locations
where items.kode = 'GIB -1GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 59225
from items, locations
where items.kode = 'GIBP-1GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'GK-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 120
from items, locations
where items.kode = 'GK-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 280
from items, locations
where items.kode = 'GLF-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 18243
from items, locations
where items.kode = 'GLU-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 63
from items, locations
where items.kode = 'GLU-20L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1824
from items, locations
where items.kode = 'GLU-4L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2643
from items, locations
where items.kode = 'GMX-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 28
from items, locations
where items.kode = 'GMX-20LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 700
from items, locations
where items.kode = 'GMX-5LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 600
from items, locations
where items.kode = 'GN-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7395
from items, locations
where items.kode = 'GRA-15GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 900
from items, locations
where items.kode = 'GRA-K 1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 740
from items, locations
where items.kode = 'GRC-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 19250
from items, locations
where items.kode = 'GRD-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1800
from items, locations
where items.kode = 'GRE-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'GRE-200GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4565
from items, locations
where items.kode = 'GRN-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1050
from items, locations
where items.kode = 'GRN-200GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 324
from items, locations
where items.kode = 'GRN-400GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1740
from items, locations
where items.kode = 'GRT-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4200
from items, locations
where items.kode = 'GRT-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 13300
from items, locations
where items.kode = 'GRU-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 143
from items, locations
where items.kode = 'GRU-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7418
from items, locations
where items.kode = 'GRU-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 985
from items, locations
where items.kode = 'GTL-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6960
from items, locations
where items.kode = 'GTU-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2970
from items, locations
where items.kode = 'GTU-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1916
from items, locations
where items.kode = 'GUS-RG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9340
from items, locations
where items.kode = 'GUS-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3634
from items, locations
where items.kode = 'HAN-EX 1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5899
from items, locations
where items.kode = 'HAN-EX250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4026
from items, locations
where items.kode = 'HAN-EX500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 989
from items, locations
where items.kode = 'HAN-RB500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2468
from items, locations
where items.kode = 'HAN-TAN1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3270
from items, locations
where items.kode = 'HAN-TAN250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5019
from items, locations
where items.kode = 'HAN-TAN500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'HANLAN-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 634
from items, locations
where items.kode = 'HANTU-RB250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 260
from items, locations
where items.kode = 'HIT-1100S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 14690
from items, locations
where items.kode = 'HIT-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1920
from items, locations
where items.kode = 'HRC F1- 10GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 582
from items, locations
where items.kode = 'HRC F1- 20GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 588
from items, locations
where items.kode = 'HRC F1- 25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 69
from items, locations
where items.kode = 'HUN-38'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 159
from items, locations
where items.kode = 'HUN-39'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 125
from items, locations
where items.kode = 'HUN-40'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 110
from items, locations
where items.kode = 'HUN-41'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21
from items, locations
where items.kode = 'HUN-42'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 40
from items, locations
where items.kode = 'HUN-43'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 900
from items, locations
where items.kode = 'ICP-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2150
from items, locations
where items.kode = 'IDV-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1439
from items, locations
where items.kode = 'IDV-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'INR-200GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 297
from items, locations
where items.kode = 'IRR-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 180
from items, locations
where items.kode = 'JAN-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10275
from items, locations
where items.kode = 'JAN-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1880
from items, locations
where items.kode = 'JB-UP 1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 900
from items, locations
where items.kode = 'JB-UP 4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 279
from items, locations
where items.kode = 'JDM13627'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 160
from items, locations
where items.kode = 'JGP-1750S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 339
from items, locations
where items.kode = 'JH'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3676
from items, locations
where items.kode = 'JON-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 725
from items, locations
where items.kode = 'JON-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 590
from items, locations
where items.kode = 'JRP-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1080
from items, locations
where items.kode = 'JW-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 384
from items, locations
where items.kode = 'KAIN-SRG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3258
from items, locations
where items.kode = 'KAL-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 43981
from items, locations
where items.kode = 'KAN-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1200
from items, locations
where items.kode = 'KAN-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6404
from items, locations
where items.kode = 'KAN-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 162
from items, locations
where items.kode = 'KAOS'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21
from items, locations
where items.kode = 'KAP-15KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 500
from items, locations
where items.kode = 'KAP-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5760
from items, locations
where items.kode = 'KAS-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 30
from items, locations
where items.kode = 'KBP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 35
from items, locations
where items.kode = 'KBS'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'KC'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 45
from items, locations
where items.kode = 'KCL-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'KE'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 52
from items, locations
where items.kode = 'KEN-KSG 20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'KEN-KSG 4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 555
from items, locations
where items.kode = 'KEO'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'KEOT-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 280
from items, locations
where items.kode = 'KF'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5349
from items, locations
where items.kode = 'KGK-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 683
from items, locations
where items.kode = 'KIE-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 355
from items, locations
where items.kode = 'KIEM-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 150
from items, locations
where items.kode = 'KK'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1220
from items, locations
where items.kode = 'KKB-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 730
from items, locations
where items.kode = 'KKS-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'KLC'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'KLE-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 201
from items, locations
where items.kode = 'KLE-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1281
from items, locations
where items.kode = 'KLN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 892
from items, locations
where items.kode = 'KLN-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1916
from items, locations
where items.kode = 'KLN-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 104
from items, locations
where items.kode = 'KLS-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 48
from items, locations
where items.kode = 'KLS-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 642
from items, locations
where items.kode = 'KLU-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 73
from items, locations
where items.kode = 'KLU-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 154
from items, locations
where items.kode = 'KLU-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 56
from items, locations
where items.kode = 'KLW'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5755
from items, locations
where items.kode = 'KMAH-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'KMU-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 72
from items, locations
where items.kode = 'KND-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 72
from items, locations
where items.kode = 'KND-2KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 48
from items, locations
where items.kode = 'KNDC-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2346
from items, locations
where items.kode = 'KNK-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8855
from items, locations
where items.kode = 'KNO-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 14591
from items, locations
where items.kode = 'KNO-2KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8164
from items, locations
where items.kode = 'KON-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4514
from items, locations
where items.kode = 'KON-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1250
from items, locations
where items.kode = 'KON-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 425
from items, locations
where items.kode = 'KON-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'KOT-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 175
from items, locations
where items.kode = 'KOT-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20965
from items, locations
where items.kode = 'KPB-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4817
from items, locations
where items.kode = 'KPB-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'KPP-LP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 405
from items, locations
where items.kode = 'KPT-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'KR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 40
from items, locations
where items.kode = 'KRL-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1640
from items, locations
where items.kode = 'KRX-1LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 171
from items, locations
where items.kode = 'KRX-20LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1085
from items, locations
where items.kode = 'KRX-4LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 368
from items, locations
where items.kode = 'KS'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 139
from items, locations
where items.kode = 'KS-PRBC'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 175
from items, locations
where items.kode = 'KSGI'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'KTR-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 870
from items, locations
where items.kode = 'KTR-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3840
from items, locations
where items.kode = 'KTR-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 590
from items, locations
where items.kode = 'KTRM-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1540
from items, locations
where items.kode = 'KTRM-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 202479
from items, locations
where items.kode = 'KTV-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 312
from items, locations
where items.kode = 'KUAT-16LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 247
from items, locations
where items.kode = 'KUAT2IN1'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2593
from items, locations
where items.kode = 'KUM-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 43317
from items, locations
where items.kode = 'KUM-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 600
from items, locations
where items.kode = 'KUMB-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3635
from items, locations
where items.kode = 'KUP-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1115
from items, locations
where items.kode = 'KUP-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 38760
from items, locations
where items.kode = 'KUS-95S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 38150
from items, locations
where items.kode = 'KUS-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1101
from items, locations
where items.kode = 'KZM-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3620
from items, locations
where items.kode = 'LAB-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1280
from items, locations
where items.kode = 'LAL-4L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2630
from items, locations
where items.kode = 'LBR-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 924
from items, locations
where items.kode = 'LBR-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8180
from items, locations
where items.kode = 'LDM-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 36505
from items, locations
where items.kode = 'LDM-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 65297
from items, locations
where items.kode = 'LDM-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'LEG-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 140
from items, locations
where items.kode = 'LEI-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 590
from items, locations
where items.kode = 'LEI-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 17840
from items, locations
where items.kode = 'LEZ-1100S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 58890
from items, locations
where items.kode = 'LEZ-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1880
from items, locations
where items.kode = 'LIN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 720
from items, locations
where items.kode = 'LIN-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'LIN-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'LINT-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 62440
from items, locations
where items.kode = 'LIP-50S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 33180
from items, locations
where items.kode = 'LIP-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 920
from items, locations
where items.kode = 'LIPX-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4549
from items, locations
where items.kode = 'LMR-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 77150
from items, locations
where items.kode = 'LMR-15GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 804
from items, locations
where items.kode = 'LMR-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5582
from items, locations
where items.kode = 'LOD-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3325
from items, locations
where items.kode = 'LOG-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4970
from items, locations
where items.kode = 'LOG-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3565
from items, locations
where items.kode = 'LOG-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'LOV-F1'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'M-72SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 77233
from items, locations
where items.kode = 'M16-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20727
from items, locations
where items.kode = 'M16-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1335
from items, locations
where items.kode = 'MAC-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5518
from items, locations
where items.kode = 'MAE-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21350
from items, locations
where items.kode = 'MAE-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 13150
from items, locations
where items.kode = 'MAG-S-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6505
from items, locations
where items.kode = 'MAGRH-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4594
from items, locations
where items.kode = 'MAGRM-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21476
from items, locations
where items.kode = 'MAGS-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 137
from items, locations
where items.kode = 'MAGS-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 259
from items, locations
where items.kode = 'MAH-12-12-17.2 50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1200
from items, locations
where items.kode = 'MAH-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 638
from items, locations
where items.kode = 'MAH13.6.27-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 347
from items, locations
where items.kode = 'MAH13.8.27-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 440
from items, locations
where items.kode = 'MAN-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 17760
from items, locations
where items.kode = 'MAN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 249
from items, locations
where items.kode = 'MAN-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4655
from items, locations
where items.kode = 'MAN-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 710
from items, locations
where items.kode = 'MAN-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 475
from items, locations
where items.kode = 'MAN-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5808
from items, locations
where items.kode = 'MAP-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 685
from items, locations
where items.kode = 'MAR-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1860
from items, locations
where items.kode = 'MAR-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1246
from items, locations
where items.kode = 'MAR-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 160
from items, locations
where items.kode = 'MAX-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 870
from items, locations
where items.kode = 'MAX-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7575
from items, locations
where items.kode = 'MAX-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 232
from items, locations
where items.kode = 'MBL100-17KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 937
from items, locations
where items.kode = 'MBL120-17KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 303
from items, locations
where items.kode = 'MBL120-8KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 35
from items, locations
where items.kode = 'MBL160-17KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 407
from items, locations
where items.kode = 'MBL80-17KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 13
from items, locations
where items.kode = 'MBL80-8KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 18
from items, locations
where items.kode = 'MCB120-18KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 22
from items, locations
where items.kode = 'MCB120-8KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 925
from items, locations
where items.kode = 'MCPN -1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 60
from items, locations
where items.kode = 'MCT-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 600
from items, locations
where items.kode = 'MCU-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 455
from items, locations
where items.kode = 'MDF-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 281
from items, locations
where items.kode = 'MDF-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 266
from items, locations
where items.kode = 'MDF-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2660
from items, locations
where items.kode = 'MDR-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 41
from items, locations
where items.kode = 'MDR-20L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1158
from items, locations
where items.kode = 'MDR-5L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10020
from items, locations
where items.kode = 'MER-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 152
from items, locations
where items.kode = 'MET-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 120
from items, locations
where items.kode = 'MEU-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 376
from items, locations
where items.kode = 'MEU-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1104
from items, locations
where items.kode = 'MFE-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 29771
from items, locations
where items.kode = 'MGRO-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8384
from items, locations
where items.kode = 'MGRO-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 502
from items, locations
where items.kode = 'MIC-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 70
from items, locations
where items.kode = 'MIN-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 52
from items, locations
where items.kode = 'MIN-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 14905
from items, locations
where items.kode = 'MIP-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1040
from items, locations
where items.kode = 'MIP-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50489
from items, locations
where items.kode = 'MIS-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 13944
from items, locations
where items.kode = 'MKP-M-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'MKP-M-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 30419
from items, locations
where items.kode = 'MKP-S-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 216
from items, locations
where items.kode = 'MMN-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4017
from items, locations
where items.kode = 'MOP-HA50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'MOR-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4738
from items, locations
where items.kode = 'MOR-20GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 230
from items, locations
where items.kode = 'MOS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 115
from items, locations
where items.kode = 'MOS-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5229
from items, locations
where items.kode = 'MOX-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 204
from items, locations
where items.kode = 'MPRP-8KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1658
from items, locations
where items.kode = 'MPT-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'MRN-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3000
from items, locations
where items.kode = 'MRS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 777
from items, locations
where items.kode = 'MRV-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 34
from items, locations
where items.kode = 'MRV-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 364
from items, locations
where items.kode = 'MTB-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8603
from items, locations
where items.kode = 'MTD 25EC-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1910
from items, locations
where items.kode = 'MTD-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8431
from items, locations
where items.kode = 'MTD-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 480
from items, locations
where items.kode = 'MTH-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 148
from items, locations
where items.kode = 'MTLK'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3820
from items, locations
where items.kode = 'MTTOP-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 105
from items, locations
where items.kode = 'MTTOP-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1836
from items, locations
where items.kode = 'MTTOP-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5
from items, locations
where items.kode = 'MU80-8KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 450
from items, locations
where items.kode = 'MUS-1100S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10390
from items, locations
where items.kode = 'MUS-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 12
from items, locations
where items.kode = 'MV-17KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 480
from items, locations
where items.kode = 'MVTE-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 57
from items, locations
where items.kode = 'MVTE-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 150
from items, locations
where items.kode = 'MVTEN-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 297
from items, locations
where items.kode = 'MZN-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 250
from items, locations
where items.kode = 'N-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 140
from items, locations
where items.kode = 'N-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 180
from items, locations
where items.kode = 'N-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4380
from items, locations
where items.kode = 'NARAXONE'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1084
from items, locations
where items.kode = 'NARAXONE1'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 203
from items, locations
where items.kode = 'NARAXONE2'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 65343
from items, locations
where items.kode = 'NAU-RG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5761
from items, locations
where items.kode = 'NBS-250'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 19334
from items, locations
where items.kode = 'NBS-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'NEF-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2500
from items, locations
where items.kode = 'NEO-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3340
from items, locations
where items.kode = 'NF-160SL'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1470
from items, locations
where items.kode = 'NF1-160SL'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 99
from items, locations
where items.kode = 'NF2-160SL'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9379
from items, locations
where items.kode = 'NG-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1725
from items, locations
where items.kode = 'NG-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 180
from items, locations
where items.kode = 'NG-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 13100
from items, locations
where items.kode = 'NG-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2030
from items, locations
where items.kode = 'NIT-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2
from items, locations
where items.kode = 'NIT-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'NK212-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6
from items, locations
where items.kode = 'NK9.34-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 430
from items, locations
where items.kode = 'NKAN-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2400
from items, locations
where items.kode = 'NKTV-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'NKZB-800GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4143
from items, locations
where items.kode = 'NMET-800S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 43240
from items, locations
where items.kode = 'NMET-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'NOKAKUN1'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5250
from items, locations
where items.kode = 'NOR-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 12
from items, locations
where items.kode = 'NOR-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1160
from items, locations
where items.kode = 'NOS-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 160
from items, locations
where items.kode = 'NOS-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1200
from items, locations
where items.kode = 'NOV-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1380
from items, locations
where items.kode = 'NOX-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2450
from items, locations
where items.kode = 'NP-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 910
from items, locations
where items.kode = 'NP-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3628
from items, locations
where items.kode = 'NPK 7-6-35 - 50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5731
from items, locations
where items.kode = 'NPK-12.12.17+2 50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2998
from items, locations
where items.kode = 'NPK-15.15.6.4 50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2047
from items, locations
where items.kode = 'NPK12.6.22-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 24894
from items, locations
where items.kode = 'NPK13.6.27-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7866
from items, locations
where items.kode = 'NPK13.8.27-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3013
from items, locations
where items.kode = 'NPK15-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 46865
from items, locations
where items.kode = 'NPK16-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2468
from items, locations
where items.kode = 'NPK16-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 66
from items, locations
where items.kode = 'NPKBS-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 305
from items, locations
where items.kode = 'NPKC 15-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 244
from items, locations
where items.kode = 'NPKC16-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 150
from items, locations
where items.kode = 'NPKCOM-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1931
from items, locations
where items.kode = 'NPSN-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'NR6-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2100
from items, locations
where items.kode = 'NR6-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1260
from items, locations
where items.kode = 'NR6-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'NRC-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 720
from items, locations
where items.kode = 'NRH-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 380
from items, locations
where items.kode = 'NRH-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'NRK-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 900
from items, locations
where items.kode = 'NRLLY-200GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3594
from items, locations
where items.kode = 'NTJ-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2100
from items, locations
where items.kode = 'NTV-12,5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1394
from items, locations
where items.kode = 'NTV-50GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5785
from items, locations
where items.kode = 'NUG-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 543
from items, locations
where items.kode = 'NUG-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 66
from items, locations
where items.kode = 'NUM-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 265
from items, locations
where items.kode = 'OB-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 140
from items, locations
where items.kode = 'OB-SP1'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 140
from items, locations
where items.kode = 'ONE-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'ONE-SH 250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 893
from items, locations
where items.kode = 'ORO-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 67
from items, locations
where items.kode = 'PAC-20KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 137
from items, locations
where items.kode = 'PACC-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 60380
from items, locations
where items.kode = 'PAL-10GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 148403
from items, locations
where items.kode = 'PAL-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 42
from items, locations
where items.kode = 'PAN-100X17KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 122
from items, locations
where items.kode = 'PAN-12017KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 62
from items, locations
where items.kode = 'PAN-120X8KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2465
from items, locations
where items.kode = 'PAR-1750S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2
from items, locations
where items.kode = 'PAR-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 135
from items, locations
where items.kode = 'PAR-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'PAR-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 892
from items, locations
where items.kode = 'PAR-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 194
from items, locations
where items.kode = 'PAR-5LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10060
from items, locations
where items.kode = 'PAR-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 720
from items, locations
where items.kode = 'PARA-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3000
from items, locations
where items.kode = 'PAT-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'PAT-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1500
from items, locations
where items.kode = 'PAT-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 215
from items, locations
where items.kode = 'PC-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 472
from items, locations
where items.kode = 'PCB-800GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7680
from items, locations
where items.kode = 'PEG-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 27449
from items, locations
where items.kode = 'PEL-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 16471
from items, locations
where items.kode = 'PEN - MUL'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2580
from items, locations
where items.kode = 'PEN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'PEN-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1084
from items, locations
where items.kode = 'PEN-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'PER15.5.20-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3360
from items, locations
where items.kode = 'PER2-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2200
from items, locations
where items.kode = 'PER3-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1300
from items, locations
where items.kode = 'PER5-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2500
from items, locations
where items.kode = 'PER6-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 36350
from items, locations
where items.kode = 'PET-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 420
from items, locations
where items.kode = 'PET-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2941
from items, locations
where items.kode = 'PGN-5ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 400
from items, locations
where items.kode = 'PGT-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 60
from items, locations
where items.kode = 'PGT-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'PGT-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 484
from items, locations
where items.kode = 'PIL-20GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 503
from items, locations
where items.kode = 'PIL-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 780
from items, locations
where items.kode = 'PIL-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1120
from items, locations
where items.kode = 'PINB-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'PINM-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2252
from items, locations
where items.kode = 'PKTKRT-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5805
from items, locations
where items.kode = 'PLE-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 26
from items, locations
where items.kode = 'PMS-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 120
from items, locations
where items.kode = 'PNM-50S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 12974
from items, locations
where items.kode = 'PNP-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1
from items, locations
where items.kode = 'PNP-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1775
from items, locations
where items.kode = 'PNT-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1105
from items, locations
where items.kode = 'POS-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 570
from items, locations
where items.kode = 'POS-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1470
from items, locations
where items.kode = 'POT-TRAY 105'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1430
from items, locations
where items.kode = 'POT-TRAY 72'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 220
from items, locations
where items.kode = 'POU-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 160
from items, locations
where items.kode = 'POU-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 280
from items, locations
where items.kode = 'POU-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2237
from items, locations
where items.kode = 'POW-16L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5900
from items, locations
where items.kode = 'POW-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 425
from items, locations
where items.kode = 'POW-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2241
from items, locations
where items.kode = 'PPC-1GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 295
from items, locations
where items.kode = 'PPD-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 90
from items, locations
where items.kode = 'PRD-95S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 18917
from items, locations
where items.kode = 'PRE-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9025
from items, locations
where items.kode = 'PRE-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7296
from items, locations
where items.kode = 'PRH-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2037
from items, locations
where items.kode = 'PRI-75S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3600
from items, locations
where items.kode = 'PRI-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5088
from items, locations
where items.kode = 'PRM-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 135
from items, locations
where items.kode = 'PRMN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 168
from items, locations
where items.kode = 'PRMN-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1200
from items, locations
where items.kode = 'PRO-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1855
from items, locations
where items.kode = 'PRO-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2920
from items, locations
where items.kode = 'PRO-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 120
from items, locations
where items.kode = 'PTB-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 26180
from items, locations
where items.kode = 'PUN-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 11026
from items, locations
where items.kode = 'PWS-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3946
from items, locations
where items.kode = 'PWS-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6235
from items, locations
where items.kode = 'QTX-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 770
from items, locations
where items.kode = 'QTX-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'QUI-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21250
from items, locations
where items.kode = 'RAC-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 647
from items, locations
where items.kode = 'RAC-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'RAC-4KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2090
from items, locations
where items.kode = 'RAD-50S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6520
from items, locations
where items.kode = 'RAD-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 120
from items, locations
where items.kode = 'RAH-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 250
from items, locations
where items.kode = 'RAJ-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'RAJ-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 37745
from items, locations
where items.kode = 'RAL-1LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 783
from items, locations
where items.kode = 'RAL-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9087
from items, locations
where items.kode = 'RAL-4LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5900
from items, locations
where items.kode = 'RAL-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1600
from items, locations
where items.kode = 'RAM-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 400
from items, locations
where items.kode = 'RAM-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2074
from items, locations
where items.kode = 'RAP-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 180
from items, locations
where items.kode = 'RAP-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4726
from items, locations
where items.kode = 'RAS-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 49095
from items, locations
where items.kode = 'RAS-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1750
from items, locations
where items.kode = 'RAT-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 56
from items, locations
where items.kode = 'RAT-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 113
from items, locations
where items.kode = 'RBK-16'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 28
from items, locations
where items.kode = 'RBK-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'RCSR-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1720
from items, locations
where items.kode = 'RDG-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 126
from items, locations
where items.kode = 'RDG-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 180
from items, locations
where items.kode = 'RDM-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1140
from items, locations
where items.kode = 'RDM-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 540
from items, locations
where items.kode = 'RDM-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 61500
from items, locations
where items.kode = 'REA-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 885
from items, locations
where items.kode = 'REA-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 29060
from items, locations
where items.kode = 'REA-4LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7580
from items, locations
where items.kode = 'REA-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 356
from items, locations
where items.kode = 'REG-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 16000
from items, locations
where items.kode = 'REG-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 18551
from items, locations
where items.kode = 'REGR-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1752
from items, locations
where items.kode = 'REGR-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 30380
from items, locations
where items.kode = 'REGR-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'RGR-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'RGR-5LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3500
from items, locations
where items.kode = 'RJB-2.5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 168
from items, locations
where items.kode = 'RKY-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6068
from items, locations
where items.kode = 'ROU-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 630
from items, locations
where items.kode = 'ROU-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 282
from items, locations
where items.kode = 'ROU-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 882
from items, locations
where items.kode = 'ROU-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3
from items, locations
where items.kode = 'RPM-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1560
from items, locations
where items.kode = 'RPP-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 74
from items, locations
where items.kode = 'RPP-DS50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 230
from items, locations
where items.kode = 'RTMS-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8163
from items, locations
where items.kode = 'RUM-10GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21980
from items, locations
where items.kode = 'RUM-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'SAB-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 435
from items, locations
where items.kode = 'SAL-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 215
from items, locations
where items.kode = 'SAL-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 220
from items, locations
where items.kode = 'SAN-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1120
from items, locations
where items.kode = 'SAN-1LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 591
from items, locations
where items.kode = 'SAN-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 25
from items, locations
where items.kode = 'SAN-400GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1576
from items, locations
where items.kode = 'SAN-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 800
from items, locations
where items.kode = 'SAR-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 88
from items, locations
where items.kode = 'SB10-100'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 60
from items, locations
where items.kode = 'SB15-100'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 237
from items, locations
where items.kode = 'SB4-100'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 340
from items, locations
where items.kode = 'SB4-250'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 33
from items, locations
where items.kode = 'SB6-100'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 70
from items, locations
where items.kode = 'SB7-100'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 39
from items, locations
where items.kode = 'SB8-100'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 629
from items, locations
where items.kode = 'SBG04-200MT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 578
from items, locations
where items.kode = 'SBK-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 360
from items, locations
where items.kode = 'SBP-20GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3444
from items, locations
where items.kode = 'SBR-5KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 700
from items, locations
where items.kode = 'SBT-2LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 216
from items, locations
where items.kode = 'SBW-20GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 609
from items, locations
where items.kode = 'SCR-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7931
from items, locations
where items.kode = 'SCR-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 11870
from items, locations
where items.kode = 'SDM-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9160
from items, locations
where items.kode = 'SDM-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6440
from items, locations
where items.kode = 'SEB-1800S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2800
from items, locations
where items.kode = 'SEC-1800S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 26520
from items, locations
where items.kode = 'SEC-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2904
from items, locations
where items.kode = 'SEC88-1750S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 16038
from items, locations
where items.kode = 'SEC88-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'SEH-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 68
from items, locations
where items.kode = 'SEL-12.5X200MT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 27932
from items, locations
where items.kode = 'SER-1750S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 65616
from items, locations
where items.kode = 'SER-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 33400
from items, locations
where items.kode = 'SER-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4602
from items, locations
where items.kode = 'SEV-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 315
from items, locations
where items.kode = 'SEV-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 11936
from items, locations
where items.kode = 'SHI-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2710
from items, locations
where items.kode = 'SID-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 985
from items, locations
where items.kode = 'SID-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5760
from items, locations
where items.kode = 'SIK-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 972
from items, locations
where items.kode = 'SIN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1248
from items, locations
where items.kode = 'SIN-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 675
from items, locations
where items.kode = 'SK-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'SL-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 160
from items, locations
where items.kode = 'SL-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1219
from items, locations
where items.kode = 'SL16-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 759
from items, locations
where items.kode = 'SLM-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'SLP-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'SM-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1
from items, locations
where items.kode = 'SMB-2IN1'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 294
from items, locations
where items.kode = 'SMD-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2065
from items, locations
where items.kode = 'SMT-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 300
from items, locations
where items.kode = 'SN-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 25
from items, locations
where items.kode = 'SN-20L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1250
from items, locations
where items.kode = 'SN-4L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 192
from items, locations
where items.kode = 'SN1-16LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 223
from items, locations
where items.kode = 'SN2-16LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4679
from items, locations
where items.kode = 'SNA-200GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 123
from items, locations
where items.kode = 'SNF-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 520
from items, locations
where items.kode = 'SNP-2LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1
from items, locations
where items.kode = 'SNS-330'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8
from items, locations
where items.kode = 'SOD-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 31871
from items, locations
where items.kode = 'SOP-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 339
from items, locations
where items.kode = 'SOP-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'SP27-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 720
from items, locations
where items.kode = 'SPA-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1920
from items, locations
where items.kode = 'SPA-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 949
from items, locations
where items.kode = 'SPA-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 64
from items, locations
where items.kode = 'SPB-16L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'SPB-2L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 90
from items, locations
where items.kode = 'SPB-5LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3013
from items, locations
where items.kode = 'SPD-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3828
from items, locations
where items.kode = 'SPD-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5
from items, locations
where items.kode = 'SPDK'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2278
from items, locations
where items.kode = 'SPE-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 680
from items, locations
where items.kode = 'SPEE-1LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3888
from items, locations
where items.kode = 'SPEE-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 840
from items, locations
where items.kode = 'SPEE-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 30
from items, locations
where items.kode = 'SPJING-T6'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'SPJING-T7'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2500
from items, locations
where items.kode = 'SPK-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2578
from items, locations
where items.kode = 'SPM-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1087
from items, locations
where items.kode = 'SPM-300ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'SPMAN-TANI'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1017
from items, locations
where items.kode = 'SPN-20KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2039
from items, locations
where items.kode = 'SPON-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5582
from items, locations
where items.kode = 'SPON-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6894
from items, locations
where items.kode = 'SPON-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 32
from items, locations
where items.kode = 'SPP-10L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 36
from items, locations
where items.kode = 'SPP-8L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8164
from items, locations
where items.kode = 'SPR-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 60
from items, locations
where items.kode = 'SPR-3LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2228
from items, locations
where items.kode = 'SPR-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2578
from items, locations
where items.kode = 'SPR-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 932
from items, locations
where items.kode = 'SPR-MAN16LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 160
from items, locations
where items.kode = 'SPRD-1LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 180
from items, locations
where items.kode = 'SPT-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5
from items, locations
where items.kode = 'SPT-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 77
from items, locations
where items.kode = 'SPT-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5593
from items, locations
where items.kode = 'SPT-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'SPYR KUAT 16L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4008
from items, locations
where items.kode = 'SRL-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 800
from items, locations
where items.kode = 'SRN-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 983
from items, locations
where items.kode = 'SSA-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 55
from items, locations
where items.kode = 'SSP-16LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 225
from items, locations
where items.kode = 'ST-C1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 11
from items, locations
where items.kode = 'ST-C25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 18400
from items, locations
where items.kode = 'STA-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9862
from items, locations
where items.kode = 'STA-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 500
from items, locations
where items.kode = 'STA-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3269
from items, locations
where items.kode = 'STA-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'STB-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 190
from items, locations
where items.kode = 'STD-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 58
from items, locations
where items.kode = 'STD-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 330
from items, locations
where items.kode = 'STG-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 557
from items, locations
where items.kode = 'STK-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 524
from items, locations
where items.kode = 'STK-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1545
from items, locations
where items.kode = 'STO-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 40
from items, locations
where items.kode = 'STO-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1
from items, locations
where items.kode = 'STQ-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 28
from items, locations
where items.kode = 'STQ-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'SUN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 15
from items, locations
where items.kode = 'SUN-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 44
from items, locations
where items.kode = 'SUN-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1264
from items, locations
where items.kode = 'SUP-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 59
from items, locations
where items.kode = 'SUP-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 936
from items, locations
where items.kode = 'SUP-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20020
from items, locations
where items.kode = 'SUP-95S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 16160
from items, locations
where items.kode = 'SUP-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 440
from items, locations
where items.kode = 'SUT 560SC- 250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2860
from items, locations
where items.kode = 'SUT 560SC- 500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7460
from items, locations
where items.kode = 'TAL-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3496
from items, locations
where items.kode = 'TAN-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1924
from items, locations
where items.kode = 'TAN-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 360
from items, locations
where items.kode = 'TAN-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 994
from items, locations
where items.kode = 'TAN-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2429
from items, locations
where items.kode = 'TBELL-0,6 ONS'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1058
from items, locations
where items.kode = 'TBH-0.3ONS'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 600
from items, locations
where items.kode = 'TC-210CM'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 720
from items, locations
where items.kode = 'TG-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'TGD-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3430
from items, locations
where items.kode = 'TGH-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 350
from items, locations
where items.kode = 'TGR-1.4KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'TGY-1.4KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 938
from items, locations
where items.kode = 'THH-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 464
from items, locations
where items.kode = 'THH-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'TIM-10LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 41660
from items, locations
where items.kode = 'TIM-1LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1682
from items, locations
where items.kode = 'TIM-20LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 19895
from items, locations
where items.kode = 'TIM-4LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 97
from items, locations
where items.kode = 'TKDO-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2400
from items, locations
where items.kode = 'TLCH'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2500
from items, locations
where items.kode = 'TM-10GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1523
from items, locations
where items.kode = 'TOR-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1497
from items, locations
where items.kode = 'TOR-80ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9757
from items, locations
where items.kode = 'TOS-25GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 415
from items, locations
where items.kode = 'TPB-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8
from items, locations
where items.kode = 'TPB-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 80
from items, locations
where items.kode = 'TPG-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6061
from items, locations
where items.kode = 'TPR-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 940
from items, locations
where items.kode = 'TPR-400GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7449
from items, locations
where items.kode = 'TRAY-105'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2100
from items, locations
where items.kode = 'TRAY-105_150LBR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 368
from items, locations
where items.kode = 'TRAY-128'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 5093
from items, locations
where items.kode = 'TRAY-200'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3000
from items, locations
where items.kode = 'TRAY-200_150LBR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1226
from items, locations
where items.kode = 'TRAY-288'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9768
from items, locations
where items.kode = 'TRAY-72'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2690
from items, locations
where items.kode = 'TRAY-72_150LBR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 50
from items, locations
where items.kode = 'TRD-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1
from items, locations
where items.kode = 'TRD-5GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'TRIKL-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1000
from items, locations
where items.kode = 'TRM-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3600
from items, locations
where items.kode = 'TRP-10GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1920
from items, locations
where items.kode = 'TRRUP-1L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 86
from items, locations
where items.kode = 'TRRUP-20L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 985
from items, locations
where items.kode = 'TRRUP-4L'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 21140
from items, locations
where items.kode = 'TRSL-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 6678
from items, locations
where items.kode = 'TRSL-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 100
from items, locations
where items.kode = 'TSP-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 13
from items, locations
where items.kode = 'TSPK-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1618
from items, locations
where items.kode = 'TUN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 10
from items, locations
where items.kode = 'TUN-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 176
from items, locations
where items.kode = 'TUN-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 20
from items, locations
where items.kode = 'TYS-1750S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 18730
from items, locations
where items.kode = 'ULT-20GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 36500
from items, locations
where items.kode = 'ULT-8GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3540
from items, locations
where items.kode = 'UNI-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 453
from items, locations
where items.kode = 'UPRIL-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 862
from items, locations
where items.kode = 'URA-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 279
from items, locations
where items.kode = 'URE-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 68
from items, locations
where items.kode = 'URE-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 240
from items, locations
where items.kode = 'UREN-25KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1907
from items, locations
where items.kode = 'URK-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 3687
from items, locations
where items.kode = 'URS-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 23305
from items, locations
where items.kode = 'UTD-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 181
from items, locations
where items.kode = 'UTX-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 12
from items, locations
where items.kode = 'UV CL'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 25
from items, locations
where items.kode = 'UV200-100M'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 67
from items, locations
where items.kode = 'UVB-200X100M'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 51
from items, locations
where items.kode = 'UVB-200X50M'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 587
from items, locations
where items.kode = 'VEC-10LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 15160
from items, locations
where items.kode = 'VEC-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 72
from items, locations
where items.kode = 'VEC-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 9951
from items, locations
where items.kode = 'VEC-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 49105
from items, locations
where items.kode = 'VIK-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1390
from items, locations
where items.kode = 'VIP-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 601
from items, locations
where items.kode = 'VIP-200ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 340
from items, locations
where items.kode = 'VIP-400ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 161
from items, locations
where items.kode = 'VIR-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 8960
from items, locations
where items.kode = 'VIR-10ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2000
from items, locations
where items.kode = 'VIR-12.5ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1082
from items, locations
where items.kode = 'VIR-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4455
from items, locations
where items.kode = 'VIT-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 135
from items, locations
where items.kode = 'VITA-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 247
from items, locations
where items.kode = 'VITA-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 393
from items, locations
where items.kode = 'VNTR SPR-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 620
from items, locations
where items.kode = 'VNTR-500ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2670
from items, locations
where items.kode = 'VPR-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 504
from items, locations
where items.kode = 'VPR-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 200
from items, locations
where items.kode = 'VPR-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 7392
from items, locations
where items.kode = 'VTF-500GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 90
from items, locations
where items.kode = 'VYG-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2
from items, locations
where items.kode = 'VYG-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 190
from items, locations
where items.kode = 'VYGN-50ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 135
from items, locations
where items.kode = 'WAR-10LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 45
from items, locations
where items.kode = 'WIN-10LT'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2710
from items, locations
where items.kode = 'WIN-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 229
from items, locations
where items.kode = 'WIN-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 176
from items, locations
where items.kode = 'WIN-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1370
from items, locations
where items.kode = 'WIN-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 2450
from items, locations
where items.kode = 'WRT-1LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 79
from items, locations
where items.kode = 'WRT-20LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 650
from items, locations
where items.kode = 'WRT-4LTR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1025
from items, locations
where items.kode = 'WUZ-100ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 991
from items, locations
where items.kode = 'WZN-250ML'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 350
from items, locations
where items.kode = 'YMA-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1089
from items, locations
where items.kode = 'YNT-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 550
from items, locations
where items.kode = 'YNT-15GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1431
from items, locations
where items.kode = 'YUV-1100S'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 11850
from items, locations
where items.kode = 'YUV-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 355
from items, locations
where items.kode = 'ZAGFT-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 4630
from items, locations
where items.kode = 'ZAH-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 251
from items, locations
where items.kode = 'ZAS-50KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 55300
from items, locations
where items.kode = 'ZAT-RG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 76960
from items, locations
where items.kode = 'ZAT-SP'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 71
from items, locations
where items.kode = 'ZEN-1KG'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1800
from items, locations
where items.kode = 'ZEN-250GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1500
from items, locations
where items.kode = 'ZIP-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 30490
from items, locations
where items.kode = 'ZIP-15GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
insert into stock (item_id, location_id, qty)
select items.id, locations.id, 1684
from items, locations
where items.kode = 'ZPH-100GR'
and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null
and not exists (
  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id
);
