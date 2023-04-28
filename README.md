# FlattenToClipBoard

An incredibly simple extension, mostly developed by ChatGPT. It takes either an active selection, or the
entire content of the active tab and copies it to the clipboard flattened to a single line.

## Why?

At work I use a database called Rocket UniData, and it's interactive prompt doesn't support multi-line queries,
but sometimes I feel the need for them.  So this let's me develop a query like:

```UniQuery
SELECT STUDENT.PROGRAMS BY.EXP STPR.STATUS WHEN ASD ( 
     STPR.STATUS EQ 'A''G''W''C''WD''V' AND ( 
         ( 
            STPR.STATUS.DATE LE '2022/05/31' AND ( STPR.G82.STATUS.END.DATE LE '2022/05/31' OR STPR.G82.STATUS.END.DATE EQ '' ) 
         ) 
    ) 
)
```

And quickly get that into something I can paste into my ssh colon prompt session.

## How Long Did It Take?
Writing this readme consumed most of the time.  ChatGPT didn't suggest setting the contributes portion of
packages.json, that also ate up a few minutes.