# Migration `20200818000832-migration`

This migration has been generated by A. David Thyresson at 8/17/2020, 8:08:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Bean" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"body" TEXT NOT NULL,
"username" TEXT NOT NULL,
"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)

CREATE TABLE "Comment" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"body" TEXT NOT NULL,
"beanId" INTEGER NOT NULL,
"username" TEXT NOT NULL,
"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY ("beanId") REFERENCES "Bean"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200818000832-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,26 @@
+datasource DS {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+model Bean {
+  id        Int       @id @default(autoincrement())
+  body      String
+  username  String
+  comments  Comment[]
+  createdAt DateTime  @default(now())
+}
+
+model Comment {
+  id        Int      @id @default(autoincrement())
+  body      String
+  beanId    Int
+  bean      Bean     @relation(fields: [beanId], references: [id])
+  username  String
+  createdAt DateTime @default(now())
+}
```


