from kooora.kooora import *
api = Kooora()

  const responsemedia = await fetch(
    "https://github.com/n-eq/kooora-unofficial-api/tree/master/kooora"
  );
  const media = await responsemedia.json();

today_matches = api.get_today_matches()
# today_matches is a dict which keys are league ID numbers, let's extract the IDs
*today_matches_ids, = today_matches
for id in today_matches_ids[]:
    print(League.from_id(id).get_title())
